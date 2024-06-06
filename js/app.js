const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    const shadow = document.querySelector('.that');
    const openedmenu = document.querySelector('.mobile-menu');
    shadow.style.opacity = "1";
    openedmenu.style.opacity = "1";
})
const cross = document.querySelector('.cross');
cross.addEventListener('click', () => {
    const shadow = document.querySelector('.that');
    const openedmenu = document.querySelector('.mobile-menu');
    shadow.style.opacity = "0";
    openedmenu.style.opacity= "0";
})