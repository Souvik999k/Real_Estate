var text=document.querySelector(".spring");
var logo=document.getElementById("logo");
window.onscroll=function(){
    menubar();
    animationOne();
}

function menubar(){
    if(document.documentElement.scrollTop>=text.offsetTop){
        document.querySelector(".menu").classList.add("sticky");
        logo.classList.add("sticky");
    }
    else{
        document.querySelector(".menu").classList.remove("sticky");
        logo.classList.remove("sticky");
    }
}

window.addEventListener("load",function(){
    document.querySelector(".loader").classList.add("loader-hidden");
});

function animationOne(){
    
    document.querySelectorAll(".offcet").forEach(function(heading){
        if((document.documentElement.scrollTop) > heading.offsetTop){
            heading.classList.add("h1-animation");
         
        }
    });
    document.querySelectorAll(".scroll").forEach(function(design){
        if((document.documentElement.scrollTop)+400 > design.offsetTop){
            design.classList.add("design-animation");
         
        }
    });
    
}