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
    var half = Math.floor(str.length/2);
    var middle = str.charAt(half);
    return reverse(middle + initials(str));
  }

  var sentence = prompt("Enter a sentence:");

  $("#left").click( function() {
    $("#sentence").text(sentence);
  });

  $("#right").click( function() {
    $("#sentence").text(insertHalf(sentence));
  });

});
