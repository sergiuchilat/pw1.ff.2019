//alert('Hello');

/*
var x = 5;
alert(x);
*/

/*var a = prompt('Enter first number');
var b = prompt('Enter second number');

var sum = parseInt(a) + Number(b);
alert('a+b=' + sum) ;*/

document.getElementById('result').innerHTML = 0;

function calculateSum(){
	var sum = Number(document.getElementById('x').value) + Number(document.getElementById('y').value);
	document.getElementById('result').innerHTML = sum;
}

function clearX(){
	document.getElementById('x').value = '';
}

function clearY(){
	document.getElementById('y').value = '';
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        var previousTop = document.getElementById('mario').offsetTop;
    	document.getElementById('mario').style.top = Number(previousTop - 15) + 'px';
    }
    else if (e.keyCode == '40') {
        var previousTop = document.getElementById('mario').offsetTop;
    	document.getElementById('mario').style.top = Number(previousTop + 15) + 'px';
    }
    else if (e.keyCode == '37') {
    	var previousLeft = document.getElementById('mario').offsetLeft;
    	document.getElementById('mario').style.left = Number(previousLeft - 15) + 'px';
    }
    else if (e.keyCode == '39') {
    	var previousLeft = document.getElementById('mario').offsetLeft;
    	document.getElementById('mario').style.left = Number(previousLeft + 15) + 'px';
    }
}



