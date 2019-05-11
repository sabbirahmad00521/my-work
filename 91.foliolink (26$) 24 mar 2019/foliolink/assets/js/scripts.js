var numbertext = document.querySelector('.numbertext');
var slides = document.getElementsByClassName("mySlides");

const getName = document.querySelector('.name').textContent;
const getDesc = document.querySelector('.des').textContent;
const cc = document.querySelector('.caption-container');

const setName = document.querySelector('.imageName');
const setDesc = document.querySelector('.caption');

function openModal() {
   document.getElementById('myModal').style.display = "block";
   cc.style.display = "block";
}

function closeModal() {
   document.getElementById('myModal').style.display = "none";
   cc.style.display = "none";
}

var slideIndex = 1;


showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

const sliderItemImg = document.querySelectorAll('.single-image img');
for (var i = 0; i < sliderItemImg.length; i++) {
   sliderItemImg[i].setAttribute("onclick", "openModal(); currentSlide(" + (i + 1) + ")")
}

function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var captionText = document.getElementById("caption");
   var prev = document.querySelector(".prev");
   var next = document.querySelector(".next");
   if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   numbertext.innerHTML = slideIndex + " of " + slides.length;
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slides[slideIndex - 1].style.display = "block";

   if (slideIndex < 2) {
      prev.style.display = "none";
      next.style.display = "block";
   } else if (slideIndex == slides.length) {
      next.style.display = "none";
      prev.style.display = "block";
   } else {
      next.style.display = "block";
      prev.style.display = "block";
   }

   setName.innerHTML = slides[slideIndex - 1].querySelector('.name').textContent;
   slides[slideIndex - 1].querySelector('.name').style.display = 'none';

   setDesc.innerHTML = slides[slideIndex - 1].querySelector('.des').textContent;
   slides[slideIndex - 1].querySelector('.des').style.display = 'none';

}



var mySlides = document.querySelectorAll('.mySlides');
mySlides.forEach(singleOne => singleOne.addEventListener('click', function () {
   mySlides[0]
   console.log(mySlides[0]);
}));


var elem = document.documentElement;
var screenOnOff = 'screenOff';
var fullscreenicon = document.querySelector('.fullscreen')

function openFullscreen() {
   if (screenOnOff === 'screenOff') {
      if (elem.requestFullscreen) {
         elem.requestFullscreen();
         screenOnOff = 'screenOn';
      } else if (elem.mozRequestFullScreen) {
         /* Firefox */
         elem.mozRequestFullScreen();
         screenOnOff = 'screenOn';
      } else if (elem.webkitRequestFullscreen) {
         /* Chrome, Safari & Opera */
         elem.webkitRequestFullscreen();
         screenOnOff = 'screenOn';
      } else if (elem.msRequestFullscreen) {
         /* IE/Edge */
         elem.msRequestFullscreen();
         screenOnOff = 'screenOn';
      }
      fullscreenicon.classList.replace('fa-expand', 'fa-compress')
   } else if (screenOnOff === 'screenOn') {
      if (document.exitFullscreen) {
         document.exitFullscreen();
         screenOnOff = 'screenOff'
      } else if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
         screenOnOff = 'screenOff'
      } else if (document.webkitExitFullscreen) {
         document.webkitExitFullscreen();
         screenOnOff = 'screenOff'
      } else if (document.msExitFullscreen) {
         document.msExitFullscreen();
         screenOnOff = 'screenOff'
      }
      fullscreenicon.classList.replace('fa-compress', 'fa-expand')
   }

}

$(document).ready(function () {
   $('ul.navlist li:has(ul)').click(function () {
      $('ul.navlist li ul').toggle()
   })
})