const btn = document.getElementById('btn');
const temp1 = document.getElementById('holder1');
const temp2 = document.getElementById('holder2');
const temp3 = document.getElementById('holder3');
const temp4 = document.getElementById('holder4');
const temp5 = document.getElementById('holder5');





btn.addEventListener("click", () => {
    temp1.classList.toggle('visible');
    temp2.classList.toggle('visible');
    temp3.classList.toggle('visible');
    temp4.classList.toggle('visible');
    temp5.classList.toggle('visible');
    console.log("Test");
})