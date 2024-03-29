const projectBox = document.querySelector('.projects-container');

const projects = [
    {
        name: "MegaManX - repo",
        img: "/src/img/projects/mega-man-x.webp",
        description: "página web onde possui a história da franquia MegaManX e os downloads de ROMs e emuladores dos respectivos jogos. (responsivo)",
        linkCode: "https://github.com/Luiz-Inaldo/Mega_Man_X_Repo_New-Version",
        linkDeploy: "https://megamanx-repo-newversion.vercel.app/"
    },
    {
        name: "Space Invaders (P5.js)",
        img: "src/img/projects/space-invaders.jpg",
        description: "Uma réplica simples do famoso jogo Space Invaders desenvolvida com a lib P5.js (somente para pc)",
        linkCode: "https://github.com/Luiz-Inaldo/Space_Invaders_Project_p5.js",
        linkDeploy: "https://space-invaders-neon.vercel.app/"
    },
    {
        name: "Arkanoid (P5.js)",
        img: "src/img/projects/arkanoid_img.png",
        description: "Uma réplica simples do famoso jogo Arkanoid desenvolvida com a lib P5.js (somente para pc)",
        linkCode: "https://github.com/Luiz-Inaldo/Arkanoid_Project_P5.js_lib",
        linkDeploy: "https://arkanoid-project-p5-js-lib.vercel.app/"
    },
    {
        name: "Tabuada dinâmica com JavaScript",
        img: "src/img/projects/tabuada.jpg",
        description: "Uma tabuada onde o JavaScript é aplicado para manipular o DOM, dando dinamismo ao projeto (responsivo).",
        linkCode: "https://github.com/Luiz-Inaldo/Tabuada_Dinamica_Com_JS",
        linkDeploy: "https://tabuadadinamica.vercel.app/"
    },
]

export function displayProjects() {

    projects.forEach(project => {

        projectBox.innerHTML += `
        
            <div class="project-card">
                <div class="project-img">
                    <img src="${project.img}" alt="project-img">
                </div>
                <span class="project-name">${project.name}</span>
                <span class="project-description">${project.description}</span>
                <span class="project-links">
                    <a href="${project.linkCode}" target="_blank">GitHub code</a>
                    <a href="${project.linkDeploy}" target="_blank">Vercel project</a>
                </span>
            </div>
        
        `

    })

}