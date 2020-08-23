var View = function(list) {
  this.list = list;
};
View.prototype.display = function() {
  if (this.list.list().length === 0) { return null };
  var html = this.list.list().map(function(item) { return "<li><div>"+item+"</div></li>" }).join("");
  return "<ul>"+html+"</ul>";
};
