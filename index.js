
var n=document.querySelectorAll("button").length;
for(var i=0;i<n;i++)
{
	document.querySelectorAll("button") [i].addEventListener("click", function(){
		
		var letter=this.innerHTML;
		makeSound(letter);

		buttonanimation(letter);
		
	});
}

document.addEventListener("keydown", function (abhi) {
	makeSound(abhi.key);
	buttonanimation(abhi.key);
});


function makeSound(key){

	switch(key)
		{
			case "w" :
				var mysound= new Audio("sounds/crash.mp3");
				mysound.play();
				break;

			case "a" :
				var mysound= new Audio("sounds/kick-bass.mp3");
				mysound.play();
				break;

			case "s" :
				var mysound= new Audio("sounds/snare.mp3");
				mysound.play();
				break;

			case "d" :
				var mysound= new Audio("sounds/tom-1.mp3");
				mysound.play();
				break;

			case "j" :
				var mysound= new Audio("sounds/tom-2.mp3");
				mysound.play();
				break;

			case "k" :
				var mysound= new Audio("sounds/tom-3.mp3");
				mysound.play();
				break;


			case "l" :
				var mysound= new Audio("sounds/tom-4.mp3");
				mysound.play();
				break;






		}

}


function buttonanimation(currentkey){
	var activeButton= document.querySelector("."+currentkey);
	activeButton.classList.add("pressed");
	setTimeout(function(){ activeButton.classList.remove("pressed") }, 100);


}