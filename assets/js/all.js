
//hide nev
function hideNev() {
  var element = document.getElementById("navbarToggler");
  if (element.classList.contains("resNav") === true) {
    element.classList.remove("resNav");
  } else {
    element.classList.add("resNav");
  }
}
