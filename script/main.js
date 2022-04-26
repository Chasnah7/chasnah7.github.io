/*
  - chasnah7.github.io JavaScript Source Code
  - main.js
  - Copyright 2022 Chasnah
  - Date Created: 8/4/21
*/

//Responsive Navigation Bar
function navFunction() {
  var x = document.getElementById("mainNavigation");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

//Collapsable Sections
function collapFunction() {
  var x = document.getElementById("collapseRight");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x. classname = "nav";
  }
}