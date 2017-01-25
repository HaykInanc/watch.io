function circle(expression, clockFaceD){
    
    var letterDom,
        initPosition,        
        lenExpression = expression.length;

    clockFaceD = clockFaceD || 400;

    function initDom(){
        letterDom = {};
        var textArea = document.createElement('div');
        textArea.className = "textArea";
        textArea.style.width = textArea.style.height = clockFaceD + "px";
        document.body.appendChild(textArea);

        for (var i=0; i<lenExpression; i++){
            letterDom[i] = document.createElement('div');
            letterDom[i].innerHTML = expression[i];
            letterDom[i].className = "letter";
            textArea.appendChild(letterDom[i]);
        };
        updatePosition();
    }

    function circlePosition(rad){
        rad = rad || -Math.PI*5/6;
        initPosition = {X: {},Y: {}};
        for (var i = 0; i < lenExpression; i++) {
            initPosition.X[i] = clockFaceD/2 * (1 - Math.sin(rad));
            initPosition.Y[i] = clockFaceD/2 * (1 + Math.cos(rad));
            rad += (Math.PI*2)/lenExpression; 
        };
    };

    function shift(radian){
        circlePosition(radian);    
        updatePosition();
    };

    function updatePosition(){
        for (var i=0; i<lenExpression; i++){
            letterDom[i].style.top = initPosition.Y[i] + "px";           
            letterDom[i].style.left = initPosition.X[i] + "px"; 
        };
    };

    function go(){
        circlePosition();
        initDom();
        shift();
    }

    var pub = {
        go: go,
        shift: shift
    };
    return pub;
};