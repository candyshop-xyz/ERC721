
      var imageNodes = document.getElementsByTagName('img');
      console.log(imageNodes[1].src);
      for (var i=0; i<imageNodes.length; i++){          
            imageNodes[i].addEventListener('click', function() {
                  document.querySelector('.main').src =  imageNodes[i].src;
                  document.querySelector('body').classList.remove('open');
            });
      }
      function toggle() {
        document.querySelector('body').classList.toggle('open');
      }
    
