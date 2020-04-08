'use strict'

const elems = document.getElementsByName('whats-icon');

for (let elem of elems) {

	let menu = elem.nextSibling.nextSibling;
	menu.style.right = "0px";

	elem.onclick = function(){

		if (menu.style.display == "inline-block") {
			menu.style.display = "none";
		} else {
			menu.style.display = "inline-block";	
		}
	}
}