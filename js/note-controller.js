(function(exports) {
  function changeGreeting(newGreeting) {
    var elem = document.getElementById('app');
    elem.innerHTML = newGreeting;
  };
  exports.changeGreeting = changeGreeting;
})(this)

var NoteController = function(view) {
  this.showList = view;
};
NoteController.prototype.show = function() {
  var elem = document.getElementById('app');
  elem.innerHTML = this.showList.display();
};
