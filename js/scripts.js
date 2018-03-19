var userSentence = prompt("Enter a sentence to regex.");
var newStr = userSentence.replace(/^[a-z]|[a-z]$/gi, function(v) {
  return v.toUpperCase();
})
console.log(newStr);
