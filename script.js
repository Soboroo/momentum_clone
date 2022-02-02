const title = document.querySelector(".hello h1");
function handleTitleClick() {
  title.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function handleMouseEnter() {
  title.innerText = "Mouse is over me!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is leaving me!";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("Copy!");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
