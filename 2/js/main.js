var a = 6;
var b = 4;

if(a == b){
	console.log('a=b');
}else if(a < b){
	console.log('a<b');
}else{
	console.log('a>b');
}


var n = 10;

if(n == 0){
	console.log('Zero');
}else if(n == 1){
	console.log('One');
}else if(n == 2){
	console.log('Two');
}else if(n == 3){
	console.log('Three');
}else if(n == 4){
	console.log('Four');
}else if(n == 5){
	console.log('Five');
}else if(n == 6){
	console.log('Six');
}else if(n == 7){
	console.log('Seven');
}else if(n == 8){
	console.log('Eight');
}else if(n == 9){
	console.log('Nine');
}else{
	console.log('Error. Not a digit');
}

n = 4;

switch(n){
	case 0:
		console.log('Zero');
		break;
	case 1:
		console.log('One');
		break;
	case 2:
		console.log('Three');
		break;
	case 3:
		console.log('Three');
		break;
	case 4:
		console.log('Three');
		break;
	case 5:
		console.log('Three');
		break;
	case 6:
		console.log('Three');
		break;
	case 7:
		console.log('Three');
		break;
	case 8:
		console.log('Three');
		break;
	case 9:
		console.log('Three');
		break;
	default:
		console.log('Error. Not a digit');
}


for(var i = 1; i <= 20 ; i++){
	console.log(i);
}

var i = 1; 
while(i <= 20 ){
	console.log(i);
	i++;
}


var i = 1; 
do{
	console.log(i);
	i++;
}while(i <= 20 )

