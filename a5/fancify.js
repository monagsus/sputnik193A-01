
function changeSize() {
  document.getElementById("text").style.fontSize = "6em";
}

function changeWeight() {
  if (document.getElementById("fancyButton").checked) {
    document.getElementById("text").className = "shmancy";
  }
  if (document.getElementById("boringButton").checked) {
    document.getElementById("text").className = "betty";
  }
}


function moo() {
  let text = document.getElementById("text");

  let upText = text.value.toUpperCase();
  let parts = upText.split(".");

  if (parts.length >0 )
  {
    for (let i = 0; i < parts.length-1; i++) {
    parts[i] += "-Moo";
    }
  }
  text.value = parts.join(".");
}