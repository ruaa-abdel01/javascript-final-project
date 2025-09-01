let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});