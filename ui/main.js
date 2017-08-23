console.log('Loaded!');
//move the image
var img=document.getElementById('main-text');
var marginLeft= 0 ;
function miveRight(){
    marginLeft= marginLeft+10;
    img.style.marginLeft=marginLeft + 'px';
    
}
img.onlick = function () {
    var interval= setInterval(moveRight,100);
    img.style.marginLeft='100px';
};