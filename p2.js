const navLinks = document.getElementById("navLinks");

// Toggle menu
function toggleMenu(){
    navLinks.classList.toggle("active");
}

// -------------Close menu when any link is clicked (Mobile)----------
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", function(){

const revealElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    revealElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });

});

});


/*-----------bubble effect-------------  */
const cards = document.querySelectorAll(".info-card");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200); // delay for one-by-one effect
    }
  });
});


function openModal(){
    document.getElementById("projectModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal(){
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    let modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
}

/*---------------top to botom-------------*/
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

/*---------------------------certificates---------------*/


const certImages = document.querySelectorAll(".certificate-item");

certImages.forEach(img => {
    img.addEventListener("click", () => {

        certImages.forEach(item => {
            item.classList.remove("active");
        });

        img.classList.add("active");
    });
});

