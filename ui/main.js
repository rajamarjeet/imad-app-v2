console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'i am amit';

// move the image

var img = document.getElementById('madi');
var marginLeft = 0;
function moveright (){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setinterval(moveRight, 50);
};