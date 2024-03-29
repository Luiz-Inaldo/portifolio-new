import { displayProjects } from "./projects.js";

document.addEventListener("DOMContentLoaded", engage)

function engage() {

    // nav variables
    const nav = document.querySelector('.navbar');
    const links = document.querySelectorAll('.link');
    const linkSub = document.querySelector('.link-sub');
    const subMenu = document.querySelector('.sub-menu');
    const arrowLink = document.querySelector('.arrow');
    const menuButton = document.querySelector('.menu-button');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    
    menuButton.addEventListener('click', openCloseMenu);
    
    links.forEach(link => switchSection(link));
    
    linkSub.addEventListener("click", () => {
        subMenu.classList.toggle('active');
        arrowLink.classList.toggle('active');
    });

    // displaying projects
    displayProjects();

    // functions
    function openCloseMenu() {
        if (subMenu.classList.contains("active") && arrowLink.classList.contains("active")) {
            subMenu.classList.toggle('active');
            arrowLink.classList.toggle('active');
        }
        nav.classList.toggle('active');
        menuButton.classList.toggle('open');
    }

    function switchSection(link) {
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
    }

}
