const dark_mode = document.querySelector('#moon')
const dark_icon = document.querySelectorAll('.icon')
const body = document.querySelector('body')
const hero = document.querySelector('.hero')
const first_border = document.querySelector('.first-border')
const second_border = document.querySelector('.second-border')
const cellList = document.querySelectorAll('.cell')
const line = document.querySelector('.iphone-line')



dark_mode.addEventListener('click', dark)

function dark() {
    dark_icon.forEach((userItem) => {
        userItem.classList.toggle('dark-icon')
    });
    dark_mode.classList.toggle('dark-sun');
    body.classList.toggle('dark-mode');
    hero.classList.toggle('dark-mode');
    first_border.classList.toggle('dark-mode');
    second_border.classList.toggle('dark-mode');
    line.classList.toggle('dark-mode');
    cellList[0].classList.toggle('dark-mode');
    cellList[2].classList.toggle('dark-mode');
    cellList[7].classList.toggle('dark-mode');
    cellList[11].classList.toggle('dark-mode');
    cellList[15].classList.toggle('dark-mode');
    
    }