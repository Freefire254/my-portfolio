var header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (Math.floor(window.scrollY) >= 80) {
    header.style.background = "#121b21";
  } else {
    header.style.background = "transparent";
    console.log("You haven't reached the minimum measurement");
  }
});
