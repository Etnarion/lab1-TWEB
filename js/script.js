function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $(".main").css("background-color", getRandomColor());
  $("body").css("background-color", getRandomColor());
  $("body").css("color", getRandomColor());
  $(".add-button").css("background-color", getRandomColor());
  $(".add-button").css("color", getRandomColor());
}