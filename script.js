// ==============================
// Mobile Menu Toggle
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});


// ==============================
// Close Menu on Link Click
// ==============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// ==============================
// Sticky Navbar
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);


window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==============================
// Scroll Reveal Animation
// ==============================

const fadeElements = document.querySelectorAll("section");

const reveal = () => {

    fadeElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            item.classList.add("show");
            item.classList.add("fade");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("🎉 Thank you! Your table has been reserved successfully.");

    form.reset();

});


// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 150){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ==============================
// Smooth Button Animation
// ==============================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "scale(1)";

    });

});


// ==============================
// Console Message
// ==============================

console.log("%c🍕 Foodie Delight Website Loaded Successfully!",
"color:#ffb703;font-size:18px;font-weight:bold;");