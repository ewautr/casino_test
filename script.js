"use strict";

document.querySelector("button").addEventListener("click", () => {
  console.log(document.querySelector("section"));
  document.querySelector("section").classList.add("slideIn");
});
