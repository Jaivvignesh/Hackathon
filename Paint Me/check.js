var colorindex=0;
var levelscore =[5,10,20,30,40,50,60,70,80];

var pallete = document.createElement('div');
pallete.setAttribute('class','pallete');

var selectorpallete = document.createElement('div');
selectorpallete.setAttribute('class','selectorpallete');

var createcolorContainer=()=>{
    var color = document.createElement('div');
    color.setAttribute('class','colorcontainer');
    return color;
}

var createcolorselect=()=>{
    var palleteselect = document.createElement('div');
    palleteselect.setAttribute('class','colorselector');
    return palleteselect;
}

var color1 = createcolorContainer();
var color2 = createcolorContainer();
var color3 = createcolorContainer();
var color4 = createcolorContainer();

pallete.appendChild(color1);
pallete.appendChild(color2);
pallete.appendChild(color3);
pallete.appendChild(color4);

document.body.append(pallete);

var colorselect2 = createcolorselect();
var colorselect3 = createcolorselect();
var colorselect4 = createcolorselect();
var colorselect5 = createcolorselect();
var colorselect6 = createcolorselect();

var colorselect1 = createcolorselect();
var colorbutton1 = createcolorbutton();
colorbutton1.id='button1';
colorselect1.append(colorbutton1);

var colorselect2 = createcolorselect();
var colorbutton2 = createcolorbutton();
colorbutton2.id='button2';
colorselect2.append(colorbutton2);

var colorselect3 = createcolorselect();
var colorbutton3 = createcolorbutton();
colorbutton3.id='button3';
colorselect3.append(colorbutton3);

var colorselect4 = createcolorselect();
var colorbutton4 = createcolorbutton();
colorbutton4.id='button4';
colorselect4.append(colorbutton4);

var colorselect5 = createcolorselect();
var colorbutton5 = createcolorbutton();
colorbutton5.id='button5';
colorselect5.append(colorbutton5);

var colorselect6 = createcolorselect();
var colorbutton6 = createcolorbutton();
colorbutton6.id='button6';
colorselect6.append(colorbutton6);

function createcolorbutton(){
    var colorbutton=document.createElement('button');
    colorbutton.setAttribute('class','colorselectbutton');
    colorbutton.innerHTML='Is it me?'
    return colorbutton;
}

selectorcolors();

function selectorcolors(){
    colorselect1.style.backgroundColor=localStorage.getItem("color2");
    colorselect2.style.backgroundColor=localStorage.getItem("color6");
    colorselect3.style.backgroundColor=localStorage.getItem("color4");
    colorselect4.style.backgroundColor=localStorage.getItem("color1");
    colorselect5.style.backgroundColor=localStorage.getItem("color5");
    colorselect6.style.backgroundColor=localStorage.getItem("color3");
}

selectorpallete.appendChild(colorselect1);
selectorpallete.appendChild(colorselect2);
selectorpallete.appendChild(colorselect3);
selectorpallete.appendChild(colorselect4);
selectorpallete.appendChild(colorselect5);
selectorpallete.appendChild(colorselect6);

document.body.append(selectorpallete);

var checkcontainer=document.createElement('div');
checkcontainer.setAttribute('class','checkcontainer');
var checkbutton=document.createElement('button');
checkbutton.setAttribute('class','checkbutton');
checkbutton.innerHTML='Check';
checkbutton.id='validatebutton';
checkcontainer.appendChild(checkbutton);
document.body.append(checkcontainer);

function fillcolors1(){
    colorindex++;
    switch(colorindex){
        case 1: color1.style.backgroundColor=colorselect1.style.backgroundColor;
            break;
        case 2: color2.style.backgroundColor=colorselect1.style.backgroundColor;
            break;
        case 3: color3.style.backgroundColor=colorselect1.style.backgroundColor;
            break;
        case 4: color4.style.backgroundColor=colorselect1.style.backgroundColor;
            break;
        default:
            alert('Selection Stack is Full');
    }
}

function fillcolors2(){
    colorindex++;
    switch(colorindex){
        case 1: color1.style.backgroundColor=colorselect2.style.backgroundColor;
            break;
        case 2: color2.style.backgroundColor=colorselect2.style.backgroundColor;
            break;
        case 3: color3.style.backgroundColor=colorselect2.style.backgroundColor;
            break;
        case 4: color4.style.backgroundColor=colorselect2.style.backgroundColor;
            break;
        default:
            alert('Selection Stack is Full');
    }
}

function fillcolors3(){
    colorindex++;
    switch(colorindex){
        case 1: color1.style.backgroundColor=colorselect3.style.backgroundColor;
            break;
        case 2: color2.style.backgroundColor=colorselect3.style.backgroundColor;
            break;
        case 3: color3.style.backgroundColor=colorselect3.style.backgroundColor;
            break;
        case 4: color4.style.backgroundColor=colorselect3.style.backgroundColor;
            break;
        default:
            alert('Selection Stack is Full');
    }
}

function fillcolors4(){
    colorindex++;
    switch(colorindex){
        case 1: color1.style.backgroundColor=colorselect4.style.backgroundColor;
            break;
        case 2: color2.style.backgroundColor=colorselect4.style.backgroundColor;
            break;
        case 3: color3.style.backgroundColor=colorselect4.style.backgroundColor;
            break;
        case 4: color4.style.backgroundColor=colorselect4.style.backgroundColor;
            break;
        default:
            alert('Selection Stack is Full');
    }
}

function fillcolors5(){
    colorindex++;
    switch(colorindex){
        case 1: color1.style.backgroundColor=colorselect5.style.backgroundColor;
            break;
        case 2: color2.style.backgroundColor=colorselect5.style.backgroundColor;
            break;
        case 3: color3.style.backgroundColor=colorselect5.style.backgroundColor;
            break;
        case 4: color4.style.backgroundColor=colorselect5.style.backgroundColor;
            break;
        default:
            alert('Selection Stack is Full');
    }
}

function fillcolors6(){
    colorindex++;
    switch(colorindex){
        case 1: color1.style.backgroundColor=colorselect6.style.backgroundColor;
            break;
        case 2: color2.style.backgroundColor=colorselect6.style.backgroundColor;
            break;
        case 3: color3.style.backgroundColor=colorselect6.style.backgroundColor;
            break;
        case 4: color4.style.backgroundColor=colorselect6.style.backgroundColor;
            break;
        default:
            alert('Selection Stack is Full');
    }
}

function checkcolor(){
    if((color1.style.backgroundColor.toString()===localStorage.getItem("color1").toString().toLowerCase())&&(color2.style.backgroundColor.toString()===localStorage.getItem("color2").toString().toLowerCase())&&(color3.style.backgroundColor.toString()===localStorage.getItem("color3").toString().toLowerCase())&&(color4.style.backgroundColor.toString()===localStorage.getItem("color4").toString().toLowerCase()))
    {
        var levelstr = localStorage.getItem("level").toString();
        levelval=parseInt(levelstr);
        if(levelval==9){
            let score = 0;
            let scorestr = localStorage.getItem("score").toString();
            let scoreval = parseInt(scorestr);
            score+=scoreval;
            score += levelscore[levelval-1];
            scorestr = score.toString();
            localStorage.setItem('score',scorestr);
            window.location='congrats.html';
        }
        else{
            let score = 0;
            let scorestr = localStorage.getItem("score").toString();
            let scoreval = parseInt(scorestr);
            score+=scoreval;
            score += levelscore[levelval-1];
            scorestr = score.toString();
            localStorage.setItem('score',scorestr);
            levelval++;
            var levelstr = levelval.toString();
            localStorage.setItem('level',levelstr);
            window.location='level1.html';
        }
    }
    else{
        var lifestr = localStorage.getItem("lifeline").toString();
        var lifeval = parseInt(lifestr);
        lifeval--;
        if(lifeval==0){
            window.location='loose.html';
        }    
        else{
            var lifevalStr = lifeval.toString();
            localStorage.setItem('lifeline',lifevalStr);
            window.location='level1.html';
        }
    }          
}

document.getElementById('button1').addEventListener('click',fillcolors1);
document.getElementById('button2').addEventListener('click',fillcolors2);
document.getElementById('button3').addEventListener('click',fillcolors3);
document.getElementById('button4').addEventListener('click',fillcolors4);
document.getElementById('button5').addEventListener('click',fillcolors5);
document.getElementById('button6').addEventListener('click',fillcolors6);
document.getElementById('validatebutton').addEventListener('click',checkcolor);



