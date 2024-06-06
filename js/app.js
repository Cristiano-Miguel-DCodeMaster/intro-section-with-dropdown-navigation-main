const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    const shadow = document.querySelector('.that');
    const openedmenu = document.querySelector('.mobile-menu');
    shadow.style.display = "block";
    openedmenu.style.display = "block";
})
const cross = document.querySelector('.cross');
cross.addEventListener('click', () => {
        const shadow = document.querySelector('.that');
        const openedmenu = document.querySelector('.mobile-menu');
        shadow.style.display = "none";
        openedmenu.style.display = "none";
})
var count1 = 0;
const arrowDown = document.querySelector('.arrow-down');
arrowDown.addEventListener('click', () => {
    count1++;
    if (!(count1%2)==0) {
        arrowDown.src = "images/icon-arrow-up.svg";
        const todolist = document.querySelector('.todolist');
        const calendar = document.querySelector('.calendar');
        const reminders = document.querySelector('.reminders');
        const planning = document.querySelector('.planning');

        todolist.style.display = "block";
        todolist.style.display = "flex";
        todolist.style.alignItems = "center";

        calendar.style.display = "block";
        calendar.style.display = "flex";
        calendar.style.alignItems = "center";

        reminders.style.display = "block";
        reminders.style.display = "flex";
        reminders.style.alignItems = "center";

        planning.style.display = "block";
        planning.style.display = "flex";
        planning.style.alignItems = "center";
    } else {
        const todolist = document.querySelector('.todolist');
        const calendar = document.querySelector('.calendar');
        const reminders = document.querySelector('.reminders');
        const planning = document.querySelector('.planning');
        arrowDown.src = "images/icon-arrow-down.svg";
        todolist.style.display = "none";

        calendar.style.display = "none";

        reminders.style.display = "none";

        planning.style.display = "none";
    }
})
var count2 = 0;
const arrowDown2 = document.querySelector('.arrow-down2');
arrowDown2.addEventListener('click', () => {
    count2++;
    if (!(count2 % 2) == 0) {
        arrowDown2.src = "images/icon-arrow-up.svg";
        const companyElements = document.querySelector('.companyelements');
    
        companyElements.style.display = "block";
        companyElements.style.display = "flex";
    } else {
        arrowDown2.src = "images/icon-arrow-down.svg";
        const companyElements = document.querySelector('.companyelements');
    
        companyElements.style.display = "none";
    }
})