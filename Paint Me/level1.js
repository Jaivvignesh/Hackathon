var level1Colors =['RosyBrown','Salmon','SeaShell','SeaGreen','AliceBlue','AntiqueWhite'];
var level2Colors =['Aqua','Aquamarine','Bisque','Blue','BlanchedAlmond','LightPink','Azure'];
var level3Colors =['BurlyWood','BlueViolet','Bisque','Brown','BlanchedAlmond','CadetBlue','Chocolate'];
var level4Colors =['Chartreuse','Crimson','Cornsilk','Coral','Cyan','DarkBlue','DarkCyan'];
var level5Colors =['DarkKhaki','DarkOrchid','DarkSlateGray','DeepPink','LightBlue','Ivory','Lavender'];
var level6Colors =['DarkGreen','DarkRed','DarkViolet','DimGrey','MediumSlateBlue','HotPink','DimGray'];
var level7Colors =['DarkMagenta','DarkSalmon','DarkTurquoise','FireBrick','MediumPurple','LightSalmon','Azure'];
var level8Colors =['DarkOliveGreen','DarkSeaGreen','DarkViolet','ForestGreen','IndianRed','GreenYellow','LightCyan'];
var level9Colors =['DarkOrange','DarkSlateBlue','DeepSkyBlue','FloralWhite','Gray','Gold','GoldenRod'];

var levelval = 0;

var levelbar = document.createElement('div');
levelbar.setAttribute('class','levelbar');
var levellabel=document.createElement('label');
levellabel.setAttribute("for", "level");
levellabel.innerHTML="Level"
levelbar.appendChild(levellabel);

var levelValue=document.createElement('span');
levelValue.innerHTML=' '+localStorage.getItem("level").toString();;
levelbar.appendChild(levelValue);

document.body.append(levelbar);

var lifelinebar = document.createElement('div');
lifelinebar.setAttribute('class','lifelinebar');

var lifeline1  = document.createElement('i');
lifeline1.setAttribute('class','fas fa-heart lifeline');
var lifeline2  = document.createElement('i');
lifeline2.setAttribute('class','fas fa-heart lifeline');
var lifeline3  = document.createElement('i');
lifeline3.setAttribute('class','fas fa-heart lifeline');

lifelinebar.appendChild(lifeline1);
lifelinebar.appendChild(lifeline2);
lifelinebar.appendChild(lifeline3);

document.body.append(lifelinebar);

var pallete = document.createElement('div');
pallete.setAttribute('class','pallete');

var createcolorContainer=()=>{
    var color = document.createElement('div');
    color.setAttribute('class','colorcontainer');
    return color;
}

var color1 = createcolorContainer();
var color2 = createcolorContainer();
var color3 = createcolorContainer();
var color4 = createcolorContainer();

fillcolors();

function fillcolors(){

    var levelstr = localStorage.getItem("level").toString();
    var levelval = parseInt(levelstr);

    var lifestr = localStorage.getItem("lifeline").toString();
    var lifeval = parseInt(lifestr);


    if(lifeval==2)
        lifeline1.style.color="grey";
    else if(lifeval==1){
        lifeline1.style.color="grey";
        lifeline2.style.color="grey";
    }

    switch(levelval){
        case 1:localStorage.setItem("color1", level1Colors[0]);localStorage.setItem("color2", level1Colors[1]); localStorage.setItem("color3", level1Colors[2]);localStorage.setItem("color4", level1Colors[3]);localStorage.setItem("color5", level1Colors[4]);
        localStorage.setItem("color6", level1Colors[5]);
        break;

        case 2:localStorage.setItem("color1", level2Colors[0]);localStorage.setItem("color2", level2Colors[1]); localStorage.setItem("color3", level2Colors[2]);localStorage.setItem("color4", level2Colors[3]);localStorage.setItem("color5", level2Colors[4]);
        localStorage.setItem("color6", level2Colors[5]);
        break;

        case 3:localStorage.setItem("color1", level3Colors[0]);localStorage.setItem("color2", level3Colors[1]); localStorage.setItem("color3", level3Colors[2]);localStorage.setItem("color4", level3Colors[3]);localStorage.setItem("color5", level3Colors[4]);
        localStorage.setItem("color6", level3Colors[5]);
        break;

        case 4:localStorage.setItem("color1", level4Colors[0]);localStorage.setItem("color2", level4Colors[1]); localStorage.setItem("color3", level4Colors[2]);localStorage.setItem("color4", level4Colors[3]);localStorage.setItem("color5", level4Colors[4]);
        localStorage.setItem("color6", level1Colors[5]);
        break;

        case 5:localStorage.setItem("color1", level5Colors[0]);localStorage.setItem("color2", level5Colors[1]); localStorage.setItem("color3", level5Colors[2]);localStorage.setItem("color4", level5Colors[3]);localStorage.setItem("color5", level5Colors[4]);
        localStorage.setItem("color6", level5Colors[5]);
        break;

        case 6:localStorage.setItem("color1", level6Colors[0]);localStorage.setItem("color2", level6Colors[1]); localStorage.setItem("color3", level6Colors[2]);localStorage.setItem("color4", level6Colors[3]);localStorage.setItem("color5", level6Colors[4]);
        localStorage.setItem("color6", level6Colors[5]);
        break;

        case 7:localStorage.setItem("color1", level7Colors[0]);localStorage.setItem("color2", level7Colors[1]); localStorage.setItem("color3", level7Colors[2]);localStorage.setItem("color4", level7Colors[3]);localStorage.setItem("color5", level7Colors[4]);
        localStorage.setItem("color6", level7Colors[5]);
        break;

        case 8:localStorage.setItem("color1", level8Colors[0]);localStorage.setItem("color2", level8Colors[1]); localStorage.setItem("color3", level8Colors[2]);localStorage.setItem("color4", level8Colors[3]);localStorage.setItem("color5", level8Colors[4]);
        localStorage.setItem("color6", level8Colors[5]);
        break;

        case 9:localStorage.setItem("color1", level9Colors[0]);localStorage.setItem("color2", level9Colors[1]); localStorage.setItem("color3", level9Colors[2]);localStorage.setItem("color4", level9Colors[3]);localStorage.setItem("color5", level9Colors[4]);
        localStorage.setItem("color6", level9Colors[5]);
        break;
    
    }
    
    color1.style.backgroundColor=localStorage.getItem("color1");
    color2.style.backgroundColor=localStorage.getItem("color2");
    color3.style.backgroundColor=localStorage.getItem("color3");
    color4.style.backgroundColor=localStorage.getItem("color4"); 
}

pallete.appendChild(color1);
pallete.appendChild(color2);
pallete.appendChild(color3);
pallete.appendChild(color4);

document.body.append(pallete);

var timecontainer=document.createElement('div');
timecontainer.setAttribute('class','timecontainer');

var label=document.createElement('label');
label.setAttribute("for", "Seconds-left");
label.innerHTML="Time left (Seconds):"

var timecount = 0;
var secondValue=document.createElement('span');

secondValue.id='demo';

timecontainer.appendChild(label);
timecontainer.appendChild(secondValue);

document.body.append(timecontainer);

levelfinder();

function levelfinder(){
    var levelstr = localStorage.getItem("level");
    levelval = parseInt(levelstr);
    
    switch(levelval){
        case 1: setInterval(displaytime,1000);
            setTimeout(redirectcheckpage,5000);
            break;

        case 2: setInterval(displaytime,500);
            setTimeout(redirectcheckpage,4500);
            break;
        
        case 3: setInterval(displaytime,1000);
            setTimeout(redirectcheckpage,4000);
            break;

        case 4: setInterval(displaytime,1000);
            setTimeout(redirectcheckpage,3500);
            break;

        case 5: setInterval(displaytime,1000);
            setTimeout(redirectcheckpage,3000);
            break;
        
        case 6: setInterval(displaytime,1000);
            setTimeout(redirectcheckpage,2500);
            break;

        case 7: setInterval(displaytime,1000);
            setTimeout(redirectcheckpage,2000);
            break;

        case 8: setInterval(displaytime,1000);
            setTimeout(redirectcheckpage,1500);
            break;
        
        case 9: setInterval(displaytime,1000);
            setTimeout(redirectcheckpage,1000);
            break;

    }
}

function displaytime(){
    
    if(levelval==1)
        timecount++;
    else{
        if(!levelval%2)
            timecount++;
        else
            timecount+=0.5;
    }
    if(((levelval>=1)&&(levelval<=3))&&(timecount > 3))
        timecontainer.style.color="Red";
    else if(((levelval>=4)&&(levelval<=6))&&(timecount >= 1.5))
        timecontainer.style.color="Red";
    else if(((levelval>=7)&&(levelval<=8))&&(timecount >= 1))
        timecontainer.style.color="Red";
    else if(levelval==9)
        timecontainer.style.color="Red";
    document.getElementById('demo').innerHTML=timecount;
}

function redirectcheckpage(){
    window.location='check.html';
}
