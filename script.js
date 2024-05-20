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

// Select the avatar images
const avatars = document.querySelectorAll(".avatar");

// Loop through the avatar images and add an event listener to each one
avatars.forEach(avatar => {
    avatar.addEventListener("click", function() {
      console.log(this.src);
    }.bind(avatar));
  });

