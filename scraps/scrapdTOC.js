//Responsive Table of Contents
function tocFunction() {
    var x = document.getElementById("tocMain");
    if (x.className === "nav") {
      x.className += " toc-responsive";
    } else {
      x.className = "nav";
    }
  }
    /*var x = document.getElementById("chevron");
    if (x.className === "tocicon") {
      x.className += " tocicon-active";
    } else {
      x.className = "tocicon";
    }
  }*/
  /*document.querySelector("input").addEventListener("click", function(){
    document.querySelector("i").classList.remove("fa fa-chevron-down");
    document.querySelector("i").classList.add("fa fa-chevron-up");
  });*/
  
  