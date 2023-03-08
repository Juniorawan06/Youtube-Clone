var text = document.getElementById("description");
textDisplay = text.innerHTML.slice(1, 106);
console.log(textDisplay);
text.innerHTML = textDisplay + "... <i class'fas fa-arrow-right'></i>";
for (let i = 1; i <= 8; i++) {
  columns.innerHTML += "";
}
