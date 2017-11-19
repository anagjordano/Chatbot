/*function animateOld(sentence) {
	dialog.innerText = "";

	for(var i = 0; i < sentence.length; i++){
		(function(index) {
		  setTimeout(function() {
			dialog.innerHTML += sentence[index]; 
		  }, 70 * i);
		})(i);
	  }
	//unlockInput();
} */


/*

var dialogElement = document.getElementById('dialog-text');
var inputElement = document.getElementById('input');

inputElement.addEventListener('keydown', replaceText); /* (method, function(event)) 

function replaceText(event){
    dialogElement.innerText = event.target.value; }; /* innerText es una propiedad, por eso hacemos igual=*/    


//dialogElement.innerText = texto; */


/*function enterKeyisPressed(event){
	if (event.code === 'Enter' ||
		event.char === 13 ||
		event.key === 'Enter'	||
		event.charCode === 13){
			return true;
		}
	return false;
} */
/* for(var i = 0; i < dialogLines.length; i++) {
		var match = dialogLines[i];
		var pattern = new RegExp(match.keywords, 'i');
		if (pattern.test(value)) {
		  dialog.innerText = match.line; 
		  break;
		}
	} */

	/*var pattern = new RegExp('(hola|Hola)');
	if  (/trabajo|estudio/.test(value)){
		dialog.innerText = 'Trabajas demasiado primo!';
	} else if (pattern.test(value)) {
		dialog.innerText = 'Hola pequeño saltamontes!';		
	}
	else {
		dialog.innerText = 'No te entiendo';
	}*/

	/*function animateDani(line) {
	var i = 0;
	dialog.innerText = "";
	var interval = setInterval(handleInterval, 100);
	
	function handleInterval() {
		dialog.innerHTML += line[i];
		i++;
		if (i >= line.length) {
			clearInterval(interval);
		}
	}
}
*/