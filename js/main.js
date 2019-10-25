const navLinks = document.querySelectorAll(".nav-link");

for (const link of navLinks) {
  link.addEventListener("click", function(event) {
    if (event) {
      for (let i = 0; i < navLinks.length; i++)
        navLinks[i].classList.remove("active");
      event.target.classList.add("active");
    }
  });
}

const home = document.querySelector("#first");

if (window.screenY > 400) {
  home.classList.add("active");
}

document.addEventListener("click", whereMouse);

function whereMouse(e) {
  console.log(e);
  console.log(window.screen);
}
