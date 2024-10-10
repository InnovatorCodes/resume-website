const projectNames=["GottaDo -Todo list app","Tempora - Weather App","The Urban Kitchen","Tic-Tac-Toe","Calculator","Library","Etch-A-Sketch","Rock Paper Scissors"];
const projectLinks=[
    "https://innovatorcodes.github.io/Todo-list/",
    "https://innovatorcodes.github.io/weather-app/",
    "https://innovatorcodes.github.io/webpack-project/",
    "https://innovatorcodes.github.io/tic-tac-toe",
    "https://innovatorcodes.github.io/calculator",
    "https://innovatorcodes.github.io/library",
    "https://innovatorcodes.github.io/etch-a-sketch",
    "https://innovatorcodes.github.io/rock-paper-scissors/"
];
const projectFavicons=["./images/GottaDo.png","./images/Tempora.svg","./images/restaurant.png","./images/tic_tac_toe.png","./images/calculator.png",
    "./images/library.png","./images/etch.png","./images/rps.png"];

for (let i = 0; i < projectNames.length; i++) {
    addProjectToPage(projectNames[i],projectLinks[i],projectFavicons[i]);
}

function addProjectToPage(projectName,projectLink,projectFavicon){
    const card=document.createElement('div');
    card.classList.add('card');
    const anchor=document.createElement('a');
    anchor.href=projectLink;
    anchor.target="_blank";
    const imgspc=document.createElement('div');
    imgspc.classList.add('imgspc');
    const favicon=document.createElement('img');
    favicon.src=projectFavicon;
    const subtext=document.createElement('div');
    subtext.classList.add('subtext');
    subtext.textContent=projectName;
    imgspc.append(favicon,subtext);
    anchor.appendChild(imgspc);
    card.append(anchor);
    document.querySelector('.cards').append(card);
}