// ======== HEADER Toggle START ===========
let menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('toggle-header');
    menuBtn.classList.toggle('fa-xmark')
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