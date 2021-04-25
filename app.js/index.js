window.addEventListener("load", ()=>{
 let header = document.querySelector("header");
    let burger = document.getElementById("hamburger");
    let navbar = document.getElementById("navbar");
    let body = document.body
    let docelen = document.documentElement;
    let links = document.getElementsByClassName("navlinks");
   

    
    
    
    burger.addEventListener("click", ()=>{
        navbar.classList.toggle("openmenu");
        burger.classList.toggle("openmenu")
    })

    for(let i = 0; i<links.length; i++){
        links[i].addEventListener("click", ()=>{
            navbar.classList.remove("openmenu");
            burger.classList.remove("openmenu");
        })
    }
})

window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    let body = document.body
    let docelen = document.documentElement;
  

    let scrollpos = body.scrollTop || docelen.scrollTop

    if(scrollpos > 50){
        header.classList.add("scroller")
    }else{
        header.classList.remove("scroller")
    }
})