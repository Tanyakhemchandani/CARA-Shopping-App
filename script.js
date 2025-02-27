// we want to show menu icons and on click it we have to show the navbar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if(bar){//if anyone clicks on the bar menu we have activate it
    //means an event is happening
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){//close the navbar on clicking
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}