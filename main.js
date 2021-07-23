const burger = document.querySelector("#burger");
const cross = document.querySelector("#close-menu")
const menu = document.querySelector("#mobile-menu");
const logo = document.querySelector("#logo");

   /*  Show menu when clicking on the burger menu in mobile view  */

burger.addEventListener("click", function () {

    menu.classList.remove("mobile-menu")
    
    menu.classList.add("mobile-menu-show")

    cross.style.display = "block";

    logo.style.display = 'none';

});

    /*  Remove mobile menu when clicking on the exit button  */

cross.addEventListener("click",function(){

    menu.classList.remove("mobile-menu-show")
   
    menu.classList.add("mobile-menu")

    cross.style.display = "none";
   
    logo.style.display ='block';
});

    /*  Close mobile menu, when not clicking on the menu  */ 

window.addEventListener("click",function(event){
    
    if(event.target != menu && event.target != logo && event.target != burger){
    
    menu.classList.remove("menu-show")
    
    menu.classList.add("menu")

    cross.style.display = "none";
    }
});


