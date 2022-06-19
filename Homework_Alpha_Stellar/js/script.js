/************** MENU COLORS *******************/
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");
const menu5 = document.getElementById("menu5");
const menu6 = document.getElementById("menu6");
const menu7 = document.getElementById("menu7");
const menu8 = document.getElementById("menu8");
const menu9 = document.getElementById("menu9");
const menu10 = document.getElementById("menu10");
const menu11 = document.getElementById("menu11");
const menu_items = document.getElementsByClassName("item")
const hdr = document.getElementById('header');
const ftr = document.getElementById('footer');
const rst = document.getElementById('reset');
const sbm = document.getElementById('submit');

menu1.addEventListener('click', function onClick() {
    menu1.style.backgroundColor = 'red';
    hdr.style.backgroundColor = menu1.style.backgroundColor;
    ftr.style.backgroundColor = menu1.style.backgroundColor;
});
menu2.addEventListener('click', function onClick() {
    menu2.style.backgroundColor = 'orange';
    hdr.style.backgroundColor = menu2.style.backgroundColor;
    ftr.style.backgroundColor = menu2.style.backgroundColor;
});
menu3.addEventListener('click', function onClick() {
    menu3.style.backgroundColor = 'yellow';
    hdr.style.backgroundColor = menu3.style.backgroundColor;
    ftr.style.backgroundColor = menu3.style.backgroundColor;
});
menu4.addEventListener('click', function onClick() {
    menu4.style.backgroundColor = 'green';
    hdr.style.backgroundColor = menu4.style.backgroundColor;
    ftr.style.backgroundColor = menu4.style.backgroundColor;
});
menu5.addEventListener('click', function onClick() {
    menu5.style.backgroundColor = 'blue';
    hdr.style.backgroundColor = menu5.style.backgroundColor;
    ftr.style.backgroundColor = menu5.style.backgroundColor;
});
menu6.addEventListener('click', function onClick() {
    menu6.style.backgroundColor = 'purple';
    hdr.style.backgroundColor = menu6.style.backgroundColor;
    ftr.style.backgroundColor = menu6.style.backgroundColor;
});
menu7.addEventListener('click', function onClick() {
    menu7.style.backgroundColor = 'pink';
    hdr.style.backgroundColor = menu7.style.backgroundColor;
    ftr.style.backgroundColor = menu7.style.backgroundColor;
});
menu8.addEventListener('click', function onClick() {
    menu8.style.backgroundColor = 'cyan';
    hdr.style.backgroundColor = menu8.style.backgroundColor;
    ftr.style.backgroundColor = menu8.style.backgroundColor;
});
menu9.addEventListener('click', function onClick() {
    menu9.style.backgroundColor = 'magenta';
    hdr.style.backgroundColor = menu9.style.backgroundColor;
    ftr.style.backgroundColor = menu9.style.backgroundColor;
});
menu10.addEventListener('click', function onClick() {
    menu10.style.backgroundColor = 'white';
    menu10.style.color = 'black';
    hdr.style.backgroundColor = menu10.style.backgroundColor;
    ftr.style.backgroundColor = menu10.style.backgroundColor;
});
menu11.addEventListener('click', function onClick() {
    menu11.style.backgroundColor = 'gray';
    hdr.style.backgroundColor = menu11.style.backgroundColor;
    ftr.style.backgroundColor = menu11.style.backgroundColor;
});
rst.addEventListener('click', function onClick() {
    hdr.style.backgroundColor = "#ffe599";
    ftr.style.backgroundColor = "#b6d7a8";
});

/***************** FORM BUTTONS ***************/
const formEl = document.getElementById('myForm');
const fnameEl = document.getElementById('first_name');
const lnameEl = document.getElementById('last_name');
const emailEl = document.getElementById('email');
const telEl = document.getElementById('tel');

function myFunction() {
    console.log("hello");
    rst.disabled = false;
};

function resetUpdate() {
    rst.disabled = true;
}
