(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var a = helloSpeaker;
var b = byeSpeaker;
for (var i=0; i<9;i++) {
  if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
    b.speak(names[i]); 
  } else {
    a.speak(names[i]);
  }
}
})();

