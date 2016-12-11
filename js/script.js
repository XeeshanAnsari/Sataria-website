 // function  for slider images    
        var imgCount = 1;
        var total = 7 ;
        function slider(x){
            var image = document.getElementById("imgSlider");
            imgCount = imgCount + x;
            if(imgCount < 1){
                imgCount = total;
            }
            else if(imgCount > total){
                imgCount = 1;
            }
            else{
                 image.src = "./images/slider/img" + imgCount + ".jpg";
            }   
        }
        
        window.setInterval(function slideA() {
            var image = document.getElementById("imgSlider");
            imgCount = imgCount + 1;
            if(imgCount < 1){
                imgCount = total;
            }
            else if(imgCount > total){
                imgCount = 1;
            }
            else{
                 image.src = "./images/slider/img" + imgCount + ".jpg";
            }
              
        },3000);