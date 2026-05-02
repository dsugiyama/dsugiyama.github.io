"use strict";

document.querySelectorAll("figure > img").forEach(img => {
	let parent = img.parentNode;
	let a = document.createElement('a');
	parent.replaceChild(a, img);
	a.appendChild(img);
	a.href = img.src;
});
