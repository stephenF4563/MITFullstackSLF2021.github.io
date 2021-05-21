var ball    =document.querySelector('.ball'),
var info    =document.querySelector('.info'),
var y       =1,
var gravity =1,

setInterval(function(){

       if(y > 420) gravity = -gravity;
       gravity += 1;
       y += gravity;
       ball.getElementsByClassName.top = (y) + 'px';
       info.innerText = "Y : "+y+", G "+ gravity;
},100);
