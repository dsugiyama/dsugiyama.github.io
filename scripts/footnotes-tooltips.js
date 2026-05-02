"use strict";

let footnoteRefs = document.querySelectorAll("a.footnote");
let footnotes = document.querySelectorAll("div.footnotes li > p");

for (let i = 0; i < footnotes.length; i++) {
	let text = footnotes[i].innerText;
	text = text.substring(0, text.length - 2); // remove trailing space and symbol '↩'
	footnoteRefs[i].setAttribute("title", text);
}
