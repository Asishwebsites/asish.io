window.addEventListener("scroll",function(){
    const navbar = document.querySelector("body > nav");
    navbar.classList.toggle('sticky', window.scrolly > 0);
})