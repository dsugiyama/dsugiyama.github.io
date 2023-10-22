"use strict";

// use ORDERED_NODE_SNAPSHOT_TYPE to ensure that items at the same index correspond to each other
let footnoteRefs = document.evaluate("//a[@class='footnote']",
	document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
let footnotes = document.evaluate("//div[@class='footnotes']//li/p",
	document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

for (let i = 0; i < footnotes.snapshotLength; i++) {
	let refNode = footnoteRefs.snapshotItem(i);
	let noteNode = footnotes.snapshotItem(i);
	let text = noteNode.innerText;
	text = text.substring(0, text.length - 2); // remove trailing space and symbol '↩'
	refNode.setAttribute("title", text);
}
