const navbar= document.getElementById("navbar");
const width= document.querySelector("body").offsetWidth;
window.addEventListener("scroll", ()=>{
    if(scrollY> 0){
        navbar.style.backgroundColor= "#31373d";
    }
    else{
        navbar.style.backgroundColor= "transparent";
    }
})

const menuIcon = document.getElementById("menu-icon");
const menu= document.getElementById("menu");
const closeIcon= document.getElementById("close-icon");
menuIcon.addEventListener("click",  ()=>{
    menu.style.top= "-300px";
    if(menu.style.top== "-300px"){
        menu.style.top= "80px";
        closeIcon.style.display= "block";
        menuIcon.style.display= "none";
        navbar.style.backgroundColor= "#31373d";
    }
    
});

closeIcon.addEventListener("click", ()=>{
    menu.style.top= "80px";
    if(menu.style.top== "80px"){
        menu.style.top= "-300px";
        closeIcon.style.display= "none";
        menuIcon.style.display= "block";
        if(scrollY> 0){
            navbar.style.backgroundColor= "#31373d";
        }
        else{
            navbar.style.backgroundColor= "transparent";
        }
    }
});