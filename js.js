var slideIndex = 1;
var dealIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

selectedDeal(0);

selectBar(0)

function showSlides(n) {
  var slides = document.getElementsByClassName("slidePhoto");
  var dots = document.getElementsByClassName("botPhoto");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function selectedDeal(n) {
  var deal = document.getElementsByClassName("deal");
  for (var x = 0; x < deal.length; x++) {
    deal[x].style.borderRadius = "";
    deal[x].style.border = "";
    deal[n].style.border = "2px solid #a80752";
    deal[n].style.borderRadius = "6px";
  }
}

function selectBar(n) {
  var bars = document.getElementsByClassName("selectBar1");
  var description = document.getElementsByClassName("description");
  for (var y = 0; y < bars.length; y++) {
    bars[n].style.backgroundColor = '#a80752'
    bars[n].style.borderRadius = '6px'
    bars[n].style.color = 'white'
    bars[y].style.backgroundColor = '#f0f0f0'
    bars[y].style.borderRadius = '6px'
    bars[y].style.color = 'black'

    description[n].style.display = 'block'
    description[y].style.display = 'none'
  }
  if (n==2) {
    description[2].style.display = 'block'
    bars[2].style.backgroundColor = '#a80752'
    bars[2].style.borderRadius = '6px'
    bars[2].style.color = 'white'
  }
}
