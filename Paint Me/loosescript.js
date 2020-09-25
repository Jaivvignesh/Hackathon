var loosecontainer=document.createElement('div');
loosecontainer.setAttribute('class','loosecontainer');
loosecontainer.innerHTML="You Lose!";
document.body.append(loosecontainer);

var scorecontainer=document.createElement('div');
scorecontainer.setAttribute('class','scorecontainer');
var scorelabel=document.createElement('label');
scorelabel.setAttribute("for", "scored");
scorelabel.innerHTML="Your Score:"
scorecontainer.appendChild(scorelabel);

var scoreValue=document.createElement('span');
scoreValue.innerHTML=' '+localStorage.getItem("score").toString();;
scorecontainer.appendChild(scoreValue);
document.body.append(scorecontainer);

setTimeout(redirectstartpage,10000);
function redirectstartpage(){
    window.location='index.html';
}