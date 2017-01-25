function tick(){
    var date = new Date(),
        radian = -date.getSeconds()/10;
    expression.shift(radian);
	clock.shift(date);
};

document.getElementsByTagName('body')[0].style.height = window.screen.height + "px";

var expression = new circle("I am a really cool web developer. Hire me.  ", 200),
    clockFace = new circle(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], 150),
    clock = new clock();

expression.go();
clockFace.go();
clock.go();

var moveLetters = new move();
moveLetters.go();

tick();
setInterval(tick,1000);

