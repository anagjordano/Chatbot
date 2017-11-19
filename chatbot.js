dialogLines = [
	{
		keywords: /años|(tu edad)|(how old)/i,
		line: 'My age cannot be counted in years',
		action: function() {replaceImage()}		
	},
	{
		keywords: /ring|anillo|Mordor/i,
		line: 'You shall depart as soon as possible, my dear Frodo',
		action: function() {replaceImage()}				
	},
	{
		keywords: /Sam/i,
		line: 'Sam is not here',
		action: function() {replaceImage(1)}
	},
	{
		keywords: /hola|saludos|buenas|(que hay)|(que tal)/i,
		line: 'Frodo, speak in English, for the Ring!',
		action: function() {replaceImage()}				
	},
	{
		keywords: /hello|(good morning)|(good day)|hi|(how are you)/i,
		line: 'Hello Frodo. I came to you to confer you a big task',
		action: function() {replaceImage()}				
	},
	{
		keywords: /salir|(go out)|(leave this)/i,
		line: "Adios",
		action: function() {
			window.location.href = "http://google.com";
		},
	},
	{
		keywords: /(I refuse)|(I won't)|no/i,
		line: "Fulfill your destiny!! YOU SHALL NOT SAY NO!!!!!",
		action: function() {replaceImage(2)},
	},
	{
		keywords: /smoke|fumar|porro|joint|pipa|pipe|smoking/i,
		line: "Of course, who wouldn't start such a big quest without some fueling puffs. You read my mind",
		action: function() {smokeJoint()},
	},
	{
		keywords: /stop|para|off/i,
		line: "Party is over?",
		action: function() {stopMusic()},
	},
	{
		keywords: /balrog|monster|montruo|dragon/i,
		line: "He won't come back",
		action: function() {replaceImage()},
	}
];

var input = document.getElementById("input");
var dialog = document.getElementById("dialog-text");
var img = document.getElementById("gandalf");
var sentence = "";
var reggaemusic = new Audio('The Maytals - Do The Reggay.mp3');
var joint = document.createElement("img");
var sunglasses = document.createElement("img");
var balrog = document.createElement("img");

function handleOnSubmit(){ 
	var value = input.value;
	dialogLines.forEach(function(item) {
		blockInput()		
		if (item.keywords.test(value)) {
			console.log(value);
			console.log(item.line);
			animate(item.line);
			item.action();			
		}	
	});
	input.value = "";
	return false;
}

function animate(line) {
	var i = 0;
	dialog.innerText = "";
	var interval = setInterval(handleInterval, 60);
	
	function handleInterval() {
		dialog.innerHTML += line[i];
		i++;
		if (i >= line.length) {
			clearInterval(interval);
			unlockInput();
		}
	}
}

function blockInput(){
	input.disabled = true;
	var timer = 30;
	var blockInput_Countdown = setInterval(function(){
		timer--;
		if (timer >= 0){
			unlockInput();
			clearInterval(blockInput_Countdown);
		}
	}, 5000);
}

function unlockInput(){
	input.disabled = false;
	input.focus();
}

function smokeJoint(){
	replaceImage();

	joint.src = "joint.png";
	joint.style.width = "30%";
	joint.style.height = "60%";
	
	joint.style.position = "absolute";
	joint.style.top = "357px";
	joint.style.left = "310px";
	joint.style.visibility = "visible";	
	document.body.appendChild(joint);

	sunglasses.src = "sunglasses.png";
	sunglasses.style.position = "absolute";
	sunglasses.style.top = "0px";
	sunglasses.style.left = "100px";
	sunglasses.style.visibility = "visible";
	document.body.appendChild(sunglasses);

	reggaemusic.play();

	var top = 0;
	var interval = setInterval(function(){
		sunglasses.style.top = (top += 5) + "px";
		if(top >= 130){
			clearInterval(interval);
		}
	}, 100);

	var timer = 0;
	var balrog_Coundown = setInterval(function(){
		timer++
		console.log(timer);		
		if (timer >= 30) {
			balrog.src = "balrog.png";
			document.body.appendChild(balrog);
			balrog.style.transform = "scaleX(-1)";
			balrog.style.position = "absolute";
			balrog.style.height = "800px";
			balrog.style.top = "0px";
			
			reggaemusic.pause();
			reggaemusic.currentTime = 0;
			var balrog_roar = new Audio('balrog_roar.mp3');
			balrog_roar.play();
			balrog.addEventListener("click", function(){
				var balrog_roar2 = new Audio('balrog_roar2.mp3');
				balrog_roar2.play();
			});
			balrog.addEventListener("dblclick", function(){
				balrog_roar.play();
				document.body.removeChild(balrog);
				sunglasses.style.visibility = "hidden";
				joint.style.visibility = "hidden"; 
				animate("whoa.. se me pusieron de corbata. Me ha flipao la yerba esta");
			});
			clearInterval(balrog_Coundown);
		}
	}, 1000);
}

function stopMusic(){
	reggaemusic.pause();
	reggaemusic.currentTime = 0;
	var partyisoff = new Audio('record_scratch.mp3');
	partyisoff.play();
	joint.style.visibility = "hidden";
	sunglasses.style.visibility = "hidden";

	replaceImage();
}

function replaceImage(i){
	switch(i){
		case 1:
		img.src = "gandalf_receloso.jpg";
		break;
		case 2:
		img.src = "gandalf_enfadado.jpg"
		img.style.width = "1300px";
		var gunshot = new Audio('gunshot.mp3');
		gunshot.play();
		break;
		default:
		img.src = "gandalf.jpg";
		 return false;
	} 
}