let hamburger = document.querySelector('.hamb');
let menu = document.querySelector('.menu');
let cover = document.querySelector('.cover');
let body = document.querySelector('body');
//let header = document.querySelector('header')

hamburger.addEventListener("click", () => {
    body.classList.toggle('stop-scrolling');
    cover.classList.toggle('backdrop');
    const visiblity = menu.getAttribute("data-visible");
    if (visiblity === "false") {
        menu.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true);
    } else {
        menu.setAttribute("data-visible", false);
        hamburger.setAttribute("aria-expanded", false);
    }
})

/*
 setTimeout(()=> {
    cover.classList.toggle('overlay');
}, 500)
*/