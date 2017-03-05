var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var contentone = {
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

app.get('/article-one', function (req, res){
    res.send(createtemplate(articleone));
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
