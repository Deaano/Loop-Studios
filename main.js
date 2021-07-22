const burger = document.querySelector("#burger");
const cross = document.querySelector("#close-menu")
const menu = document.querySelector("#mobile-menu");
const logo = document.querySelector("#logo");

burger.addEventListener("click", function () {

    menu.classList.remove("mobile-menu")
    menu.classList.add("mobile-menu-show")

    cross.style.display = "block";

    

});

cross.addEventListener("click",function(){

    menu.classList.remove("mobile-menu-show")
    menu.classList.add("mobile-menu")

    cross.style.display = "none";
   
    
});

window.addEventListener("click",function(event){
    if(event.target != menu && event.target != logo && event.target != burger){
        menu.classList.remove("menu-show")
        menu.classList.add("menu")
    
        cross.style.display = "none";
    }
});


