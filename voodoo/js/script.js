
/*********************** Background Video ************************/
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
/*****************************************************************/



window.onscroll = function() {myFunction()};

var mainB = document.getElementById("main");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}




$(document).ready(function (){
	var ContentLinkBlock = $('.point-to-black');

	ContentLinkBlock.mouseover(function(){
		$(this).addClass('c-lb-black');
		$(this).find('.c-lb-text-zone').addClass('c-lb-tz-full');
	});
	ContentLinkBlock.mouseout(function(){
		$(this).removeClass('c-lb-black');
		$(this).find('.c-lb-text-zone').removeClass('c-lb-tz-full');
	});
});



$(document).ready(function(){
	var GalleryImage = $('.gallery-block');

	GalleryImage.mouseover(function(){
		$(this).find('.gb-image').addClass('black-back');
		$(this).find('.gb-desc').addClass('display-flex');
	});
	GalleryImage.mouseout(function(){
		$(this).find('.gb-image').removeClass('black-back');
		$(this).find('.gb-desc').removeClass('display-flex');
	});
});