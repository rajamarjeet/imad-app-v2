var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one': {
    title: 'article one : amit raj',
    heading: 'article one',
    date: 'mar 5, 2017',
    content:`
         <div>
             this is article one.  this is article one.  this is article one. this is article one. this is article one. this is article one.
        </div>
        <div>
             this is article one.  this is article one.  this is article one. this is article one. this is article one. this is article one.
        </div>`
},
 'article-two': {
     title: 'article two : amit raj',
    heading: 'article two',
    date: 'mar 19, 2017',
    content:`
         <div>
             this is article two.  this is article two.  this is article two. this is article two. this is article two. this is article two.
        </div>
        <div>
            this is article two.this is article two.this is article two.this is article two.this is article two.this is article two.this is article two.this is article two.this is article two.this is article two.
        </div>`},
 'article-three': {
      title: 'article three : amit raj',
    heading: 'article three',
    date: 'mar 19, 2017',
    content:`
         <div>
             this is article three.  this is article three.  this is article three. this is article three. this is article thee. this is article three. this is article three.  this is article three.  this is article three. this is article three. this is article thee. this is article three
        </div>
        <div>
            this is article three.  this is article three.  this is article three. this is article three. this is article thee. this is article three. this is article three.  this is article three.  this is article three. this is article three. this is article thee. this is article three.
        </div>`},
};

 function createtemplate (data) {
  var title = data.title;
  var heading = data.heading;
  var date = data.date;
  var content = data.content;
  
var htmltemplate =`
 <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
             <h1>
            ${heading}
        </h1>
        <div>
            ${date}
        </div>
       ${content}
        </div>
        `;
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
app.get("/:articleName", function (req, res){
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});

app.get('/article-two', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
