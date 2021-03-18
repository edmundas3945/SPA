var slideIndex = 1;
var dealIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

selectedDeal(0)

function showSlides(n) {
  var slides = document.getElementsByClassName("slidePhoto");
  var dots = document.getElementsByClassName("botPhoto");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function selectedDeal(n) {
    var deal = document.getElementsByClassName("deal");
    for (var x = 0; x < deal.length; x++) {

        deal[x].style.borderRadius = '';
        deal[x].style.border = '';
        deal[n].style.border = '2px solid red';
        deal[n].style.borderRadius = '6px';
    } 

    console.log('works');
}
function selectBar(n) {
  
}

