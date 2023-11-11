"use strict";
//styles
document.querySelector("body").style.background="url('../background pics/background pic 5.jpg')";
document.querySelector("body").style.color="white";
document.querySelector("body").style.fontFamily="cursive";
//div style
document.querySelector("#section").style.position="absolute";
document.querySelector("#section").style.top="20%";
document.querySelector("#section").style.left="10%";
document.querySelector("#section").style.padding="17px";
//individual styles
document.querySelector("label").style.fontSize="40px";
document.querySelector("label").style.color="#5c4033";
document.querySelector("label").style.textDecoration="underline";
document.querySelector("#input").style.position="absolute";
document.querySelector("#input").style.top="100px"
document.querySelector("#input").style.width="300px";
document.querySelector("#input").style.height="40px";
document.querySelector("#input").style.backgroundColor="transparent";
document.querySelector("#input").style.border="2px solid red";
document.querySelector("#input").style.borderRadius="15px 60px";
document.querySelector("#input").style.textAlign="center";
document.querySelector("#input").style.padding="10px";
document.querySelector("#input").style.color="white";
document.querySelector("#input").style.fontSize="30px";
document.querySelector("button").style.width="100px";
document.querySelector("button").style.height="40px";
document.querySelector("button").style.border="2px solid red";
document.querySelector("button").style.backgroundColor="#5c4033";
document.querySelector("button").style.borderRadius="25px";
document.querySelector("button").style.position="absolute";
document.querySelector("button").style.top="250px";
document.querySelector("p").style.position="absolute";
document.querySelector("p").style.left="8%";
document.querySelector("p").style.top="500px";
//functionallity
document.addEventListener("DOMContentLoad", allFunctions);
function allFunctions(){
	document.querySelector("button").addEventListener("click", convert);
	function convert(){
		let x = document.querySelector("#input").value;
		let y= document.querySelector("p");
		alert("Please enter")
	}
}


