var score = 0
var k = 0
function button_click(){
	score = score + 1
	document.getElementById("reload").innerHTML	= score}
function autoclick(){
	score = score + k
	document.getElementById("reload").innerHTML	= score

}

function buyautoclick(){
	if (score >=10){
		score = score - 10
		k = k + 1
		document.getElementById("reload").innerHTML	= score
}}
function buybabushka(){
	if (score >=100){
		score = score - 100
		k = k + 10
		document.getElementById("reload").innerHTML	= score
}}
setInterval(autoclick,1000)