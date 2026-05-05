let firstParagraph = document.querySelector("p");

let paragraphText = firstParagraph.innerText;

let words = paragraphText.split(" ");

let wordCount = words.length;

let readingTime = wordCount / 250;

firstParagraph.innerText += " (Reading time: " + readingTime + " minutes)";