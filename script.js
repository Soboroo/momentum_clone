console.log(document);
const title = document.getElementById("title");
title.innerText = "simpleBruh";
for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
  document.getElementsByClassName("title")[i].innerText = "simpleBruh";
}
