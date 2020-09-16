var colors = ["red", "gray", "blue", "yellow"];
var newColor = document.getElementById("inp");
var i = 0;
function changeColor() {
  document.body.style.backgroundColor = colors[i];
  i++;
  if (i === colors.length) {
    i = 0;
  }
}
function changeInpColor() {
  document.body.style.backgroundColor = newColor.value;
  if (newColor.value != "") {
    if (document.body.style.backgroundColor == newColor.value) {
      colors.push(newColor.value);
    }
  } else {
    alert("хоосон байна.");
  }

  console.log(newColor.value);
  console.log(colors);
}

function goBack() {
  window.history.back();
  console.log("ajillalaa");
}