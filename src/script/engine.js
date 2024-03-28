// global variables
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.link');
const linkSub = document.querySelector('.link-sub');
const subMenu = document.querySelector('.sub-menu');
const arrowLink = document.querySelector('.arrow');
const menuButton = document.getElementsByClassName('menu-button')[0];
const homeButton = document.querySelector('.link.home');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');

menuButton.addEventListener('click', () => {

    if (subMenu.classList.contains("active") && arrowLink.classList.contains("active")) {
        subMenu.classList.toggle('active');
        arrowLink.classList.toggle('active');
    }
    nav.classList.toggle('active');
    menuButton.classList.toggle('open');
    
});

links.forEach(link => {

    link.addEventListener('click', () => {

        const sectionName = link.classList[1].trim();

        switch (sectionName) {
            case "home":
                homeSection.classList.add('active');
                aboutSection.classList.remove('active');
                projectsSection.classList.remove('active');
                break;
        
            case "about":
                aboutSection.classList.add('active');
                homeSection.classList.remove('active');
                projectsSection.classList.remove('active');
                break;

            case "projects":
                projectsSection.classList.add('active');
                aboutSection.classList.remove('active');
                homeSection.classList.remove('active');
                break;
        }

    })

});

linkSub.addEventListener("click", () => {
    subMenu.classList.toggle('active');
    arrowLink.classList.toggle('active');
});