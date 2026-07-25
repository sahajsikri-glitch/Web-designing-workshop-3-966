// what is synchronous js code?
// most of the code we've been writing
// means code is executed line by line

// ASYNCHRONOUS CODE ?
// is executed after a task runs in the bg finishes
// EXECUTION doesnt wait for ASYNCHRNOUS TASK to finish its work

//eg-1 settimeout
// eg-2 img.src (To load an image )

const img = document.querySelector(".dog");
img.src = "dog.jpg";
img.addEventListener("load", function () {
  img.classList.add("fadeIn");
});
p.style.width = "300px";
