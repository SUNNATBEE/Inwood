const elBurger = document.querySelector(".header__logo-burger");
const elBurgerTab = document.querySelector(".header__burger")
const elClose = document.querySelector(".header__close");
const elNav = document.querySelector(".header__nav");
const elPerson = document.querySelector(".header__person")
const elModal = document.querySelector(".modal");
const elModalClose = document.querySelector(".modal__login-close");
const elOverlay = document.querySelector(".overlay");

elBurger.addEventListener("click" , ()=> {
    elNav.classList.add("header__nav-js")
});

elBurgerTab.addEventListener("click" , ()=> {
    elNav.classList.add("header__nav-js")
});

elClose.addEventListener("click" , ()=> {
    elNav.classList.remove("header__nav-js")
});

elPerson.addEventListener("click" , ()=>{
    elModal.classList.add("modal-js");
    elOverlay.classList.add("overlay-js")
});

elModalClose.addEventListener("click" , ()=>{
    elModal.classList.remove("modal-js");
    elOverlay.classList.remove("overlay-js");
});

// Slick start


$('.creation__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.package-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

//   Creation slick start




let offset = 0;
let scrollOffset = 0;
const sliderLine = document.querySelector('.products__slider-list');
const sliderCursor = document.querySelector('.products__slider-line-nav-cursor');

// work slider

document.querySelector('.products__slider-line-van-btn2').addEventListener('click', function () {
    offset = offset + 460;
    if (offset > 2300) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.products__slider-line-van-btn1').addEventListener('click', function () {
    offset = offset - 460;
    if (offset < 0) {
        offset = 2300;
    }
    sliderLine.style.left = -offset + 'px';
});

// work scroll

document.querySelector('.products__slider-line-van-btn2').addEventListener('click', function () {
    scrollOffset = scrollOffset + 16.66;
    if (scrollOffset > 83.3) {
        scrollOffset = 0;
    }
    sliderCursor.style.right = -scrollOffset + '%';
});

document.querySelector('.products__slider-line-van-btn1').addEventListener('click', function () {
    scrollOffset = scrollOffset - 16.66;
    if (scrollOffset < 0) {
        scrollOffset = 83.3;
    }
    sliderCursor.style.right = -scrollOffset + '%';
});
