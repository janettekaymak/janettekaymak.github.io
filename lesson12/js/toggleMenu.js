const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
const menu = document.getElementById('menU');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
    menu.classList.toggle("change");
}, false);