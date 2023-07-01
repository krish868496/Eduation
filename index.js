var menu = document.getElementById("menu-btn");
var close = document.getElementById("btn-close");
var list = document.getElementById("list");

menu.addEventListener("click", ()=>{
    list.style.right="0px";
})
close.addEventListener("click", ()=>{
    list.style.right="-220px";
})