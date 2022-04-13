// JS cho menu

var menuBtn = document.getElementById(".menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "image/close1.jpg";
    } else {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.jpg";
    }
}
// var scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000,
//     speedAsDuration: true
// });

// JS cho thanh menu
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



