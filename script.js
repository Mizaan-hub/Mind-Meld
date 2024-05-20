// NAV BAR SCROLL CHANGE
window.addEventListener('scroll', () => {
    console.log("Aye you finally scrolled 🫸🔵🔴🫷🫴🟣");
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// FAQ's CLASS TOGGLE (FUGA)
// show/hide answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('fuga');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            console.log("FUGA 💀🏯💀 🫸⛩️🫷 ");
            icon.className = "uil uil-minus";
        }
        else{
            icon.className = "uil uil-plus";
        }
    })
});


// SHOW HIDE AVATARS

const avatars = document.querySelectorAll(".avatar img");
const show = document.querySelector(".avatar-popup");


avatars.forEach(avatar => {
    avatar.addEventListener('click', (event) => {

        if(show.className != 'show'){
            const avatarPopup = event.target.parentElement.nextElementSibling;
            avatarPopup.classList.toggle("show");
            console.log("Aye you naughty you wanna see her :)")

            const avatarBlur = event.target.parentElement;
            avatarBlur.classList.toggle('blur');
        }
    })
});

// SHOW HIDE AVATARS END

// SHOW/HIDE NAV MENU
const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-meu-btn");
const closeBtn = document.querySelector("#close-meu-btn");

// SHOW/HIDE NAV MENU END
