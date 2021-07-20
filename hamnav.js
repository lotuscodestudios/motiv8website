function toggleanimate() {
  let toggleAnimate = document.querySelector(".ham-nav");
  let nav = document.querySelector(".nav");
  let backdrop = document.querySelector(".back-drop");
  if (toggleAnimate.className === "ham-nav" || nav.className === "nav") {
    toggleAnimate.className += " active";
    nav.className += " open";
    backdrop.style.display = "block";
  } else {
    toggleAnimate.className = "ham-nav";
    nav.className = "nav";
    backdrop.style.display = "none";
  }

  console.log("hi");
}
