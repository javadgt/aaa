/** @format */

// const sidebar = document.querySelector(".sidebar")
// const hambergerMenu = document.querySelector(".ham-menu")
// const overlay = document.querySelector(".overlay")
// const search = document.querySelector(".search")
let accordian = document.querySelectorAll(".accordian");
// const toggleSidebar = ()=>{
//   if(sidebar.style.right == '0px') {
//     sidebar.style.right = "-250px"
//     overlay.style.opacity = 0
//     overlay.style.visibility = "hidden"
//     return
//   }
//   sidebar.style.right = 0
//   overlay.style.opacity = 1
//   overlay.style.visibility = "visible"

// }

// hambergerMenu.onclick = toggleSidebar
// overlay.onclick = toggleSidebar
// search.onclick = toggleSidebar


// thumbs slider

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});
// end thumbs slider



new Swiper(".mySwiper0", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween:0,

  // slidesPerView: 1,
});

accordian.forEach((accordian) => {
  accordian.addEventListener("click", () => {
    accordian.classList.toggle("active");
  });
});

let swiper1 = new Swiper(".mySwiper1", {
  // Optional parameters
  spaceBetween: 20,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}></span>`
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    665: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

// var swiper2 = new Swiper(".mySwiper", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper3 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper3,
//   },
// });

// Initialize the map
// var mymap = L.map('map').setView([32.4279, 53.6880], 6);

// // Add a tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
//   maxZoom: 18,
// }).addTo(mymap);

// L.marker([35.6892, 51.3890]).addTo(mymap)
//   .bindPopup('Tehran, Iran')
//   .openPopup();
