// Count the number of words in a string
function countWords(the_text) {
  return the_text.split(" ").length;
}

// Convert word count into reading time in minutes
function wordsToMinutes(words) {
  return words / 250;
}

// Add reading time to a paragraph element
function insertReadingTime($p) {

  // Make sure the element exists and is a paragraph
  if ($p.innerText && $p.matches("p")) {

    let words = countWords($p.innerText);

    let duration = wordsToMinutes(words);

    $p.innerText += " (Reading time: " + duration + " minutes)";
  }
}

// Select all paragraphs
let $paragraphs = document.querySelectorAll("p");

let count = $paragraphs.length;

// Loop through each paragraph
for (let i = 0; i < count; i++) {

  insertReadingTime($paragraphs[i]);

}