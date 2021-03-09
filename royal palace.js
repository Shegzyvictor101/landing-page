/*
royal palace javascript function code.
*all function is inside this file.
feel free to copy the code.
*/

var window_width  = document.getElementById("window-width");
var device_width = document.getElementById("device-width")
window.onresize = function(){
      var inner_width = document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;
      var screen_width = screen.width;
      window_width.innerHTML = "Window width: " + inner_width;
      device_width.innerHTML = "device width: " + screen_width;
}
//function that is hiding and showing the menu
var $menuBar = document.getElementById("menu-bar");

//the function ends here....

/*
this function is the one sliding those image in
*/
var imageIndex = 0;
slideShow();

function slideShow(){
      var i;
      var image = document.getElementsByClassName("slide-show");
      for(i = 0; i < image.length; i++){
            image[i].style.display = "none";
      }
      imageIndex++;
      if(imageIndex > image.length){
            imageIndex = 1;
      }
      image[imageIndex-1].style.display = "block";
}

setInterval(slideShow, 5000)
//slide-show function ends here.......

window.onload = function(){
      var why_choose_us = document.getElementsByClassName("why-choose-us-container")[0];
      var svg = why_choose_us.querySelector("svg");

      if(window.innerWidth > 600 || document.documentElement.clientWidth > 600 || document.body.clientWidth > 600){
            svg.style.display = "none";
          
      }
      else{
            svg.style.display = 'block';
      }
}

var scrollToTop = document.getElementById('scroll-to-top');
window.onscroll = function(){
  if(window.scrollTop > 50 || document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
    scrollToTop.style.display = 'block'
  }
  else{
    scrollToTop.style.display = 'none'
  }
}

scrollToTop.addEventListener('click', function(){
  window.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
})

$(document).ready(function(){
  $('.menu-bar').click(function(){
    $('.menu-list').slideToggle()
  })
})



