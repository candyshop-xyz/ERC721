var imageNodes = document.getElementsByTagName('img');

imageNodes[1].addEventListener('click', function(){
document.querySelector('.main').src = imageNodes[1].src;
document.querySelector('body').classList.remove('open'); 
});

imageNodes[2].addEventListener('click', function(){
document.querySelector('.main').src = imageNodes[2].src;
document.querySelector('body').classList.remove('open'); 
});


imageNodes[3].addEventListener('click', function(){
document.querySelector('.main').src = imageNodes[3].src;
document.querySelector('body').classList.remove('open'); 
});


imageNodes[4].addEventListener('click', function(){
document.querySelector('.main').src = imageNodes[4].src;
document.querySelector('body').classList.remove('open'); 
});


imageNodes[5].addEventListener('click', function(){
document.querySelector('.main').src = imageNodes[5].src;
document.querySelector('body').classList.remove('open'); 
});


imageNodes[6].addEventListener('click', function(){
document.querySelector('.main').src = imageNodes[6].src;
document.querySelector('body').classList.remove('open'); 
});


imageNodes[7].addEventListener('click', function(){
document.querySelector('.main').src = imageNodes[7].src;
document.querySelector('body').classList.remove('open'); 
});

function toggle() {
document.querySelector('body').classList.toggle('open');
}

