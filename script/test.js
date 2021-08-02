(function() {
  //IIFE - immediately invoked function expression
  var balls = 5;
  console.log = balls
})();
document.getElementById("yes").onclick = function() {
  document.getElementById("fart").innerHTML = "Uh oh, stinky!";
  document.getElementById("yes").style.display = "none";
  document.getElementById("no").style.display = "none";
}
document.getElementById("no").onclick = function() {
  document.getElementById("fart").innerHTML = "cringe";
  document.getElementById("yes").style.display = "none";
  document.getElementById("no").style.display = "none";
}
