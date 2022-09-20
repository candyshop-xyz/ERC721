var imageNodes = document.getElementsByTagName('img');
function selectImage(index) {
console.log(imageNodes[index].src)
document.querySelector('.main').src = imageNodes[index].src;
document.querySelector('body').classList.remove('open');
}
for (var i=1; i<imageNodes.length; i++){          
            console.log(imageNodes[i].src)
            imageNodes[i].addEventListener('click', selectImage(i));
      }
      function toggle() {
        document.querySelector('body').classList.toggle('open');
      }
    
