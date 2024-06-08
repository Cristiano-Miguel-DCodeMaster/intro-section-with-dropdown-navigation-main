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
var count3 = 0;
const arrowDown3 = document.querySelector('.arrow-down3');
arrowDown3.addEventListener('click', () => {
    count3++;
    if (!(count3%2)==0) {
        arrowDown3.src = "images/icon-arrow-up.svg";
       
        const todolist2 = document.querySelector('.todolist2');
        const calendar2 = document.querySelector('.calendar2');
        const reminders2 = document.querySelector('.reminders2');
        const planning2 = document.querySelector('.planning2');

        todolist2.style.display = "block";
        todolist2.style.display = "flex";
        todolist2.style.alignItems = "center";

        calendar2.style.display = "block";
        calendar2.style.display = "flex";
        calendar2.style.alignItems = "center";

        reminders2.style.display = "block";
        reminders2.style.display = "flex";
        reminders2.style.alignItems = "center";

        planning2.style.display = "block";
        planning2.style.display = "flex";
        planning2.style.alignItems = "center";
    } else {
        const todolist2 = document.querySelector('.todolist2');
        const calendar2 = document.querySelector('.calendar2');
        const reminders2 = document.querySelector('.reminders2');
        const planning2 = document.querySelector('.planning2');
        arrowDown3.src = "images/icon-arrow-down.svg";
        todolist2.style.display = "none";

        calendar2.style.display = "none";

        reminders2.style.display = "none";

        planning2.style.display = "none";
    }
})
var count4 = 0;
const arrowDown4 = document.querySelector('.arrow-down4');
arrowDown4.addEventListener('click', () => {
    count4++;
    if (!(count4 % 2) == 0) {
        arrowDown4.src = "images/icon-arrow-up.svg";
        const companyElements = document.querySelector('.companyelements');
    
        companyElements.style.display = "block";
        companyElements.style.display = "flex";
    } else {
        arrowDown4.src = "images/icon-arrow-down.svg";
        const companyElements = document.querySelector('.companyelements');
    
        companyElements.style.display = "none";
    }
})
var count1 = 0;
const Featuresoption = document.querySelector('.Featuresoption');
Featuresoption.addEventListener('click', () => {
    count1++;
    const arrowDown = document.querySelector('.arrow-down')
    if (!(count1 % 2) == 0) {
        arrowDown.src = "images/icon-arrow-up.svg";
        const optionsdesktop = document.querySelector('.optionsdesktop');

        optionsdesktop.style.display = "block";
    } else {
        arrowDown.src = "images/icon-arrow-down.svg";
        const optionsdesktop = document.querySelector('.optionsdesktop');

        optionsdesktop.style.display = "none";
    }
})
var count2 = 0;
const Company = document.querySelector('.Company');
Company.addEventListener('click', () => {
    count2++;
    const arrowDown2 = document.querySelector('.arrow-down2')
    if (!(count2 % 2) == 0) {
        arrowDown2.src = "images/icon-arrow-up.svg";
        const companyelementsdesktop = document.querySelector('.companyelementsdesktop');

        companyelementsdesktop.style.display = "block";
        companyelementsdesktop.style.display = "flex";
        companyelementsdesktop.style.flexDirection = "column";
    } else {
        arrowDown2.src = "images/icon-arrow-down.svg";
        const companyelementsdesktop = document.querySelector('.companyelementsdesktop');

        companyelementsdesktop.style.display = "none";
    }
    })