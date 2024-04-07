// ======== HEADER Toggle START ===========
let menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('toggle-header');
    menuBtn.classList.toggle('bx-x')
})
// ======== HEADER Toggle END ===========

// ======== TYPING ANIMATION START ===========
let type = new Typed('.typingAnimation', {
    strings: ['Transformer les idées en innovation','développeur web', 'développeur mobile'],
    typedSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
})
// ======== TYPING ANIMATION END ===========

// ========================================//

// ======== SKILL BAR ANIMATION START ===========
const progressBars = document.querySelectorAll('.inner-bar');
window.addEventListener('scroll', function(){
    progressBars.forEach(function(progressBar){
        const rect = progressBar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom>= 0) {
            const width = progressBar.getAttribute('data-width')
            progressBar.style.width = width + '%'
        }
    })
})
// ======== SKILL BAR ANIMATION END ===========


document.addEventListener("DOMContentLoaded", function () {
    var mainImage = document.getElementById("mainImage");

    // Sauvegarder la source originale de l'image
    var originalSrc = mainImage.src;

    // Nouvelle source au survol
    var newSrc = "./images/misterOumar2.jpg";

    // Changer la source au survol
    mainImage.addEventListener("mouseenter", function () {
        mainImage.src = newSrc;
    });

    // Restaurer la source d'origine lorsque l'on ne survole plus
    mainImage.addEventListener("mouseleave", function () {
        mainImage.src = originalSrc;
    });
});