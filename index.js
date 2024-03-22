const sideBar = document.querySelector('.left-container');
const hideBtn = document.querySelector('.hideBtn')


hideBtn.addEventListener('click', () => {
    sideBar.classList.add('none')
})