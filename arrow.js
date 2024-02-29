let search = document.getElementById('target')

function startClock() {
	var now = new Date();
	var hor = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
	var min = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
	document.getElementById('liveClock').innerHTML = hor + '<span>:</span>' + min;
	// : inside span to select it in the css to make it blink
	var reWrite = setTimeout(startClock, 1000);
}

let focused = 1
function detectKey(e) {

	if (e.keyCode == '32') {
		focused = 0
		let sp = document.getElementById('target').focus()
	} else if (e.keyCode == '27') {
		focused = 1
		search.value = ""
	}
	if (e.keyCode == '38') {//up
		focused -= 4
	}
	else if (e.keyCode == '40') {//down
		focused += 4
	}
	else if (e.keyCode == '37') { //left
		focused -= 1
	}
	else if (e.keyCode == '39') { //right
		focused += 1
	}
	if (focused < 0) {
		focused = 1
	}
	if (focused > 8) {
		focused = 8
	}
	document.querySelectorAll('.box').forEach((e) => {
		e.style.backgroundColor = "gray";
	})

	var fo = document.getElementById(focused);
	fo.style.backgroundColor = 'blueviolet'
}

let google
function getSearch(e) {
	google = `https://www.google.com/${e.target.value}`
}