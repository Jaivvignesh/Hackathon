var startBgcolor = ['RebeccaPurple', 'DeepPink', 'Tomato', 'Orchid', 'LimeGreen','MediumVioletRed'];
var startBgloop = 0;

var congratscontainer=document.createElement('div');
congratscontainer.setAttribute('class','congratscontainer');
congratscontainer.innerHTML="You Won!!!";
document.body.append(congratscontainer);

var scorecontainer=document.createElement('div');
scorecontainer.setAttribute('class','scorecontainer');
var scorelabel=document.createElement('label');
scorelabel.setAttribute("for", "points-scored");
scorelabel.innerHTML="Your Score:"
scorecontainer.appendChild(scorelabel);

var scoreValue=document.createElement('span');
scoreValue.innerHTML=' '+localStorage.getItem("score").toString();;
scorecontainer.appendChild(scoreValue);

document.body.append(scorecontainer);

setInterval(colorflash,1000);
setTimeout(redirectstartpage,10000);

function colorflash() {
    congratscontainer.style.color = startBgcolor[startBgloop++];
    if (startBgloop == startBgcolor.length)
        startBgloop = 0;
}

function redirectstartpage(){
    window.location='index.html';
}