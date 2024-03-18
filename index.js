window.onscroll = function() {myFunction()};
var header = document.getElementsByClassName("sticky");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
