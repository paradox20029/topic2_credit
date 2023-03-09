// function changeColor() {
//     var lightId = document.getElementById("light-select").value;
//     var color = document.getElementById("color-picker").value;
//     document.getElementById(lightId).style.backgroundColor = color;

// $(document).ready(function changeColor() {
//     var lightId = $("light-select").value;
//     var color = $("color-picker").value;
//     $(lightId).css.backgroundColor = color;
// });
function changeColor() {
    var lightId = $("#light-select").val(); //The val() method returns or sets the value attribute of the selected elements
    var color = $("#color-picker").val(); //in this case the values of id light selector and color picker are stored in the respective varibles
    $("#" + lightId).css("background-color", color); //the id is accessed and the css method is used for changing the background color according to the value in color picker id
  }