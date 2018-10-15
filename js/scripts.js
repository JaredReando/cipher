$(document).ready(function() {
  var bookends = function(str) {
    return (str.charAt(0) + str.charAt(str.length - 1)).toUpperCase();
  }
  var reverse = function(str) {
    return str.split("").reverse().join("");
  }

  var sentence = prompt("Enter a sentence:");
  var initials = bookends(sentence);
  console.log(sentence + " -> " + initials);
  console.log(reverse(initials))

});
