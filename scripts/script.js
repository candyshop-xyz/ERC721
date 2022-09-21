var imageNodes = document.getElementsByTagName('img');

imageNodes[1].onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.main').src = imageNodes[1].src;
  document.querySelector('body').classList.remove('open');
}

imageNodes[2].onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.main').src = imageNodes[2].src;
  document.querySelector('body').classList.remove('open');
}

imageNodes[3].onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.main').src = imageNodes[3].src;
  document.querySelector('body').classList.remove('open');
}

imageNodes[4].onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.main').src = imageNodes[4].src;
  document.querySelector('body').classList.remove('open');
}

imageNodes[5].onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.main').src = imageNodes[5].src;
  document.querySelector('body').classList.remove('open');
}

imageNodes[6].onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.main').src = imageNodes[6].src;
  document.querySelector('body').classList.remove('open');
}

imageNodes[7].onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.main').src = imageNodes[7].src;
  document.querySelector('body').classList.remove('open');
}

function toggle() {
document.querySelector('body').classList.toggle('open');
}


