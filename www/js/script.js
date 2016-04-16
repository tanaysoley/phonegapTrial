function generate(){
	number = document.getElementById("number");
	message = document.getElementById("message");

	random = Math.floor(Math.random()*100);
	number.innerText = random;
	random = Math.floor(Math.random()*3);
	if(random == 0){
		document.body.className="red";
	}else if(random == 1){
		document.body.className="green";
	}else{
		document.body.className="yellow";
	}
}