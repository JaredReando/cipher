$(document).ready(function() {
  var bookends = function(str) {
    return (str.charAt(0) + str.charAt(str.length - 1)).toUpperCase();
  }

  var reverse = function(str) {
    return str.split("").reverse().join("");
  }

  var initials = function(str) {
    return str + reverse(bookends(str));
  }

  var insertHalf = function(str) {
    return Math.floor(str.length/2);
  }

  $("#left").click( function() {
    $("#sentence").text("Clicked left image");
  });

  $("#right").click( function() {
    $("#sentence").text("Clicked right image");
  });

  var sentence = prompt("Enter a sentence:");
  var reversedInitials = initials(sentence);
  var half = insertHalf(sentence);
  console.log(sentence + " -> " + half);
});
