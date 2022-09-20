
      var imageNodes = document.getElementsByTagName('img');

      for (var i=1; i<imageNodes.length; i++){          
            imageNodes[1].addEventListener('click', function() {
                  console.log(imageNodes[1].src);
                  document.querySelector('.main').src =  imageNodes[1].src;
                  document.querySelector('body').classList.remove('open');
            });
      }
      function toggle() {
        document.querySelector('body').classList.toggle('open');
      }
    
