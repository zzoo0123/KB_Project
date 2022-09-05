//content slider

let slider1 = tns({
  container : ".content-slider",
  "slideBy": 1,
  "speed" : 400,
  "nav" : false,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".nexts",
  responsive: {
    1600:{
      items: 4,
      gutter: 20,
    },
    1024:{
      items:3,
      gutter:20
    },
    768:{
      items: 2,
      gutter:20
    },
    480:{
      items:1
    }
  }
})

//event slider

let slider2 = tns({
  container : ".event-slider",
  "slideBy": 1,
  "speed" : 400,
  "nav" : false,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".nexts",
  responsive: {
    1600:{
      items: 4,
      gutter: 20,
    },
    1024:{
      items:3,
      gutter:20
    },
    768:{
      items: 2,
      gutter:20
    },
    480:{
      items:1
    }
  }
})



//main slider
let slideIndex = 1;
showSlides(slideIndex);

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num) {
  slides.style.left = -num * 330 + 'px';
  currentIdx = num;
}

nextBtn.addEventListener('click', function () {
  if( currentIdx < slideCount - 3){
    moveSlide(currentIdx + 1);
  }else{
    moveSlide(0);
  }   
});

prevBtn.addEventListener('click', function () {
  if( currentIdx > 0){
    moveSlide(currentIdx - 1);
  }else{
    moveSlide(slideCount - 3);
  }   
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
