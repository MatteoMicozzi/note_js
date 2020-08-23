var List = function() {
  this.array = [];
};
List.prototype.createNote = function(text) {
  var note = new Note(text);
  this.array.push(note);
};
List.prototype.list = function() {
  var arrayList = this.array.map(function(item) { return item.text })
  return arrayList;
};
