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

  var sentence = prompt("Enter a sentence:");
  var reversedInitials = initials(sentence)
  console.log(sentence + " -> " + reversedInitials);
});
