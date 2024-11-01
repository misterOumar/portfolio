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

// ======== ACTIVE LINK STATE START ===========
let navLinks = document.querySelectorAll('header nav ul li a')
let Section = document.querySelectorAll('section')

window.addEventListener('scroll', ()=> {
    
    let scrollPos = window.scrollY + 10;
    Section.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link =>{
                link.classList.remove('active')
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add("active")
                }
            })
        }
    })
})
// ======== ACTIVE LINK STATE END ===========


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


// ======== CONSTACT FORM ===========
document.addEventListener("DOMContentLoaded", function () {
    

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Préparation des données pour correspondre aux variables du template
        const formData = {
            to_name: "Mister Oumar",  
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("msg").value,
        };

        // Envoi via EmailJS
        emailjs.send("service_9k22cng", "template_tnbdeds", formData)
            .then((response) => {
                document.getElementById("response-message").textContent = "Message envoyé avec succès!";
            })
            .catch((error) => {
                document.getElementById("response-message").textContent = "Erreur lors de l'envoi du message.";
                console.error("Erreur:", error);
            });
    });
});

