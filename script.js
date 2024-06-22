const hamIcon = document.querySelector(".hamburger-icon");

const hamMenu = document.querySelector(".hamburger-menu");
const close=document.querySelector(".close");

hamIcon.addEventListener("click",()=>{
    hamMenu.classList.toggle("active");
    document.querySelector("body").style.overflow="hidden";
});
close.addEventListener("click", ()=>{
    hamMenu.classList.remove("active");
    document.querySelector("body").style.overflow="visible";
});