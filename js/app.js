
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened")
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)

        if (entry.isIntersecting) {
            menuLink.classList.add("selected");
        } else {
            menuLink.classList.remove("selected");
        }
    });
});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    })
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
    })


// Swal.fire(
//     'Good job!',
//     'you clicked the button!',
//     'success'
// );

// console.log(dayjs().format());





//Eventos de mouse


// window.addEventListener("load", function() {
//     let prueba = document.querySelector(".prueba")
//     prueba.addEventListener("click", function() {
//     alert("Tocaste el boton")
//     })
// })

// window.addEventListener("load", function() {
//     let botones = document.querySelectorAll(".prueba")

//     for (let i = 0; i < botones.length; i++) {
//         botones[i].addEventListener("click", function() {
//             this.style.color = "red"
//         } )
//     }


// Eventos de teclado


//     window.addEventListener("keypress", function(e) {
//     if (e.key == "Enter") {
//         alert("Ey! ¿Qué tocas enter?");
//     }
//     })
// })