//Sticky bar
window.addEventListener('scroll',function(){
    let navbar = document.getElementById('NavBar');

    if(window.pageYOffset>=50){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
});

// Hero Image Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active1";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
};

// Mobile Navigation
function myFunction() {
  var x = document.getElementById("myNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function closeNav() {
  var y = document.getElementById("myNav");
  if (y.style.display === "block") {
    y.style.display = "none";
  }
}
//c

	