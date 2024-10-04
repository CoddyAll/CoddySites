
var score = 0;
var k = 0

function buttonClick(){
	score = score + 1;
	document.getElementById("result").innerHTML = score;
}

function buy_autoclick(){
	if (score >= 10) {
		score = score - 10
		document.getElementById("result").innerHTML = score;
		k = k + 1
	}
}
function autoclick(){
	score = score + k;
	document.getElementById("result").innerHTML = score;
}







setInterval(autoclick, 1000)


