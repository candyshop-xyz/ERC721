var imageNodes = document.getElementsByTagName('img');
for (var i=1; i<imageNodes.length; i++){          
            console.log(imageNodes[i].src)
            imageNodes[i].addEventListener('click', function() {
                  console.log(imageNodes[i].src)
                  document.querySelector('.main').src = imageNodes[i].src;
                  document.querySelector('body').classList.remove('open');
            });
      }
      function toggle() {
        document.querySelector('body').classList.toggle('open');
      }
    
