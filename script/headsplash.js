//Script for randomly selecting sub-header text on index page.
window.onload = randomSplash;
function randomSplash() {
   var splashArray = [{
      1:{
         h1: "If there could be such a thing as a modern Geocities site...",
         p: "It would probably look like this mess."
      },
      2:{
         h1: "Optimized for mobile!",
         p: "Kinda..."
      },
      3:{
         h1: "Naminamu",
         p: "Dodo"
      }
      }];
//Random Sub-Header Splash picker
   var keys = Object.keys(splashArray);
   var n = keys.length;
   var index = Math.floor(Math.random() * n);
   var randomKey = keys[index];
   var splash = splashArray[randomKey];
   var container = document.getElementById('mainHead').innerHTML;
   container.innerHTML = '<h1>'+ splash[i].h1 +'</h1>'+'<p>'+ splash[i].p +'</p>';
}