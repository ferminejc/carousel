
var slideIndex, slides, carouselIndicators;
function init() {
    slideIndex = 0;
    slides = document.getElementsByClassName("carousel-slide");
    slides[slideIndex].style.opacity = 1;

    //disable nextPrevBtn if slide count is one
    if (slides.length < 2) {
        var nextPrevBtns = document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display = "none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display = "none";
        }
    }

    //add carouselIndicators
    carouselIndicators = [];
    var carouselNav = document.getElementById("carousel-nav"), i;
    for (i = 0; i < slides.length; i++) {
        var carouselIndicator = document.createElement("span");
        carouselIndicator.classList.add("carouselIndicators");
        carouselNav.append(carouselIndicator);
        carouselIndicator.setAttribute("onclick", "moveSlide(" + i + ")");
        carouselIndicators.push(carouselIndicator);
    }
    carouselIndicators[slideIndex].classList.add("active");
}
init();
function plusSlides(n) {
    moveSlide(slideIndex + n);
}
function moveSlide(n) {
    var i;
    var current, next;
    var moveSlideAnimClass = {
        forCurrent: "",
        forNext: ""
    };
    if (n > slideIndex) {
        if (n >= slides.length) { n = 0; }
        moveSlideAnimClass.forCurrent = "move-left-current-slide";
        moveSlideAnimClass.forNext = "move-left-next-slide";
    } else if (n < slideIndex) {
        if (n < 0) { n = slides.length - 1; }
        moveSlideAnimClass.forCurrent = "move-right-current-slide";
        moveSlideAnimClass.forNext = "move-right-prev-slide";
    }

    if (n != slideIndex) {
        next = slides[n];
        current = slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "carousel-slide";
            slides[i].style.opacity = 0;
            carouselIndicators[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        carouselIndicators[n].classList.add("active");
        slideIndex = n;
    }

}
var timer = null;
function setTimer() {
    timer = setInterval(function () {
        plusSlides(1);
    }, 3000);
}
setTimer();
