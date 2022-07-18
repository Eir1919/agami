let treatmentImg = document.querySelector(".treatment-image");
let treatmentTltip = document.querySelector(".treatment-tooltip");

treatmentImg.addEventListener("mouseover", function() {
    treatmentTltip.style.display = "unset";
});

treatmentImg.addEventListener("mouseout", function() {
    treatmentTltip.style.display = "none";
});

// ====== menu ======
let hamburger = document.querySelector(".main-header-hamburger-menu");
let menu = document.querySelector(".menu");
let close = document.querySelector(".menu-close");

hamburger.addEventListener("click", function (evt) {
    evt.preventDefault();
    // console.log("Клик по меню");
    menu.classList.add("menu-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove("menu-show");
    // menu.classList.remove("menu-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (menu.classList.contains("menu-show")) {
            menu.classList.remove("menu-show");
        }
    }
});

// ====== slider ======
let sliderContainer = document.querySelector(".technologies-box-490");
let innerSlider = document.querySelector(".technologies-box-490-inner");

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", function (evt) {
    pressed = true;
    startX = evt.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", function () {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseleave", function () {
    sliderContainer.style.cursor = "default";
});

sliderContainer.addEventListener("mouseup", function () {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

/*window.addEventListener("mouseup", () => {
    // pressed = false;
});*/

window.addEventListener("mouseup", function () {
    // pressed = false;
});

sliderContainer.addEventListener("mousemove", function (evt) {
    if (!pressed) return;
    evt.preventDefault();

    x = evt.offsetX;

    innerSlider.style.left = x - startX + "px";

    checkBoundary();
});

let checkBoundary = function checkBoundary() {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = "-" + (inner.width - outer.width) + "px";
    }
};

// ====== slider 2 ======
let slides = document.querySelectorAll(".case-wrapper .case-text-768");
let slidesLength = slides.length;

let prev = document.querySelector(".case-switcher-icon-left");
let next = document.querySelector(".case-switcher-icon-right");

for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * (index) + "%";
}

let loop = 0 + 1000 * slidesLength;

function goNext () {
    loop++;
        for (let index = 0; index < slides.length; index++) {
            const element = slides[index];
            element.style.transform = "translateX(" + 100 * (index - loop % slidesLength) + "%)";
        }
}

function goPrev () {
    loop--;
        for (let index = 0; index < slides.length; index++) {
            const element = slides[index];
            element.style.transform = "translateX(" + 100 * (index - loop % slidesLength) + "%)";
        }
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
document.querySelector("keydown", function (evt) {
    if (evt.code === "ArrowRight") {
        goNext();
    } else if (evt.code === "ArrowLeft") {
        goPrev();
    }
});


// ====== slider 3 ======
// let swiper = new Swiper(".case", {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// const slider = document.querySelector(".swiper-container");

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    // spaceBetween: 10,
    // disableOnInteraction: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return current + ' из ' + total; 
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      cssMode: true,
    //   direction: 'horizontal',
    //   loop: true,
    //   slidesPerGroup: 1,
    //   clickable: true,
  });
  
/*
.menu {
    display: none;
}

.menu-show {
    display: block;
}

<button class="menu-close" type="button">Закрыть меню</button>
*/


// document.querySelector('.button-hider').addEventListener('click', function () {
//     document.querySelector('.pseudo-parent').classList.toggle('hide-before');
// });

// accordion start
$(document).ready(function() {
    $(".accordion__header").click(function(e) {
        var accordionitem = $(this).attr("data-tab");
        $("#" + accordionitem)
            .slideToggle()
            .parent()
            .siblings()
            .find(".accordion__content")
            .slideUp();
  
        $(this).toggleClass("show");
        $("#" + accordionitem)
            .parent()
            .siblings()
            .find(".accordion__content")
            .removeClass("show");
  
        $(".accordion__button", this).toggleClass("accordion__button_collapse");
        $("#" + accordionitem)
            .parent()
            .siblings()
            .find(".accordion__header")
            .removeClass("accordion__button_collapse");
    });
  });

  $(document).ready(function() {
    var firstitem = $('.accordion__item:first').children();
    // console.log(firstitem);
    // firstitem.attr("data-tab");
    firstitem.slideDown();
    $(".accordion__button", firstitem).toggleClass("accordion__button_collapse");
});
// accordion end

// modal start
var popup = document.querySelector(".modal-login");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
    }

    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
    }
});
// modal end