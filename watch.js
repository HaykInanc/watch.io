function GenHand(date, type, mainRad, handColor){
    var point = {},
        domPosition = {},
        radClock = mainRad,
        pointSideLen = 6;
    handColor = handColor || "#FFF";   
    type= type || "S"; 

    if (type == "H"){
        mainRad = 0.75*mainRad; 
    };  

    function initHandDom(){
        for (var i = 0, rad = 0; rad < mainRad; rad += pointSideLen*2, i++){
            point[i] = document.createElement('div');
            point[i].style.height = pointSideLen+"px";
            point[i].style.width = pointSideLen+"px";
            point[i].style.borderRadius = pointSideLen+"px";
            point[i].style.position = "absolute";
            point[i].className = "letter"; 
            point[i].style.backgroundColor = handColor;
            document.getElementById('clockArea').appendChild(point[i]);                           
        };
    };

    function initPointPosition(date, rad, division){
        division = division || 60;
        if (type == "H"){
            division = 12;
            radian = Math.PI/(division/2) * date.getHours() - Math.PI/2;
        }  
        else if (type == "M") {
            radian = Math.PI/(division/2) * date.getMinutes() - Math.PI/2;
        }
        else{
            radian = Math.PI/(division/2) * date.getSeconds() - Math.PI/2;
        }
        domPosition = {
            x: (Math.cos(radian)*rad) + radClock,
            y: (Math.sin(radian)*rad) + radClock
        };
    };

    function shift(date){
        for (var i = 0, rad = 0; rad < mainRad; rad += pointSideLen*2, i++){
            initPointPosition(date, rad);
            point[i].style.top = domPosition.y + "px";
            point[i].style.left = domPosition.x + "px";
        };
    }; 

    function go(){
        initHandDom();
    };

    var pub = {
        go: go,
        shift: shift
    }

    return pub;
};

function clock(rad){

    var HHand, MHand, SHand;
    
    rad = rad || 60;

    function initDom(date){
        clockArea = document.createElement('div');
        clockArea.id = "clockArea";
        clockArea.style.height = rad*2 + "px";
        clockArea.style.width = rad*2 + "px";
        clockArea.style.display = 'inline-block';
        clockArea.style.position = "relative";                 
        document.body.appendChild(clockArea);
        HHand = new GenHand(date, "H", rad, "#FFF");
        MHand = new GenHand(date, "M", rad, "#FFF");
        SHand = new GenHand(date, "S", rad, "#F00");              
    };

    function shift(date){
        HHand.shift(date);
        MHand.shift(date);
        SHand.shift(date);
    };

    function go(date){
        initDom(date);
        HHand.go(date);
        MHand.go(date);
        SHand.go(date);        
    };   

    var pub = {
        go: go,
        shift: shift        
    }; 

    return pub;    
};