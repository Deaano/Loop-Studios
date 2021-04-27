const burger = document.querySelector("#burger");
const cross = document.querySelector("#close-menu")
const menu = document.querySelector("#menu");
const logo = document.querySelector("#logo");

burger.addEventListener("click", function () {

    menu.classList.remove("menu")
    menu.classList.add("menu-show")

    cross.style.display = "block";

    logo.classList.replace("loopstudio-img-menu");



});

cross.addEventListener("click",function(){

    menu.classList.remove("menu-show")
    menu.classList.add("menu")

    cross.style.display = "none";

    logo.style.position = "unset";
   
    
});

window.addEventListener("click",function(event){
    if(event.target != menu && event.target != logo && event.target != burger){
        menu.classList.remove("menu-show")
        menu.classList.add("menu")
    
        cross.style.display = "none";
    }
});


