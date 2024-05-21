const TeamImg = document.querySelectorAll('.team__img img')

TeamImg.forEach(team => {
    team.addEventListener('mouseenter', () => {
        console.log(team.src)
        console.log("Ayee you Naughty Boy, Do Not Click Those Links")
    })
});