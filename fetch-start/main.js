const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

function updateDisplay(verse) {
  verse = verse.replace(" ", "").toLowerCase();
  const url = `${verse}.txt`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      poemDisplay.textContent = text;
    })
    .catch((error) => {
      poemDisplay.textContent = `Could not fetch verse: ${error}`;
    });
}

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
