function move(speed){

    var letters = document.getElementsByClassName("letter");
    var lenLetters = letters.length,
        move = {
            "X": 0,
            "Y": 0                       
        };
    
    speed = speed || 20;

    function shift() {
        window.addEventListener('mousemove', function(event) {
            for (var i = 0; i < lenLetters; i++) {
                setTimeout(updateMargin, i*speed, i, event);
            };
        }, false);
    };

    function updateMargin(i, event){
        var rad = Number(letters[i].parentNode.style.height.slice(0,-2))/2;
        event = event || false
        move.Y = event.pageY || window.screen.height/2;           
        move.X = event.pageX || window.screen.width/2; 
        letters[i].style.marginTop = move.Y - rad + "px";           
        letters[i].style.marginLeft = move.X - rad + "px";     
    };

    function go() {
        for (var i = 0; i < lenLetters; i++) {
            updateMargin(i);
        };
        shift();
    };

    pub = {
        go: go
    };

    return pub;
};