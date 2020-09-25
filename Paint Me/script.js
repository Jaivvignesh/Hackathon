var startBgcolor = ['blueviolet', 'burlywood', 'cadetblue', 'Crimson', 'LimeGreen'];
var startBgloop = 0;


var welcomeContainer = document.createElement('div');
var titleCard = document.createElement('h1')
var startContainer = document.createElement('div');
var startbutton = document.createElement('button');
var startcontent = document.createElement('p');

setlifeline();
welcometitlecreate();
setInterval(colorflash, 1000);
startcreate();

function setlifeline(){

    localStorage.clear();
    
    if (localStorage.length == 0){
        localStorage.setItem('lifeline','3');
        localStorage.setItem('level','1');
        localStorage.setItem('score','0');
    }  
}

document.body.setAttribute('class', 'body');

function welcometitlecreate() {

    welcomeContainer.setAttribute('class', 'welcomecontainer');

    titleCard.innerHTML = "PAINT ME RIGHT";

    welcomeContainer.append(titleCard);
    document.body.append(welcomeContainer);
}

function startcreate() {

    startContainer.setAttribute('class', 'startcontainer');

    startbutton.id = 'game-start';
    startbutton.setAttribute('class', 'fa fa-play startbutton');
    startContainer.append(startbutton);

    startcontent.setAttribute('class', 'startcontent');
    startcontent.innerHTML = 'Press to Start';
    startContainer.append(startcontent);

    document.body.append(startContainer);
}

function colorflash() {
    startbutton.style.backgroundColor = startBgcolor[startBgloop++];
    if (startBgloop == startBgcolor.length)
        startBgloop = 0;
}

function redirectLevelpage() {
    window.location = 'level1.html';
}

document.getElementById('game-start').addEventListener('click', redirectLevelpage);
