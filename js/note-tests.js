(function(exports) {

  function testNoteToBeANote() {
    var note = new Note("My favourite language is JavaScript");

    assert.isTrue(note.getText() === "My favourite language is JavaScript");
  };
  function testInsertionOfNoteToList() {
    var notes = new List;
    notes.createNote("First");
    assert.isTrue(notes.list().includes("First"));
  };
  function createNote() {
    var notes = new List;
    notes.createNote("first");
    notes.createNote("second");
    assert.isTrue(notes.list().includes("first" && "second"));
  };
  function testIfViewIncludesList() {
    var notes = new List;
    notes.createNote("first");
    notes.createNote("second");
    var viewList = new View(notes);
    assert.isTrue(viewList.display().includes("first"));
    assert.isTrue(viewList.display().includes("second"));
  };
  function testIfViewIsNull() {
    var notes = new List;
    var viewList = new View(notes);
    assert.isTrue(viewList.display() === null);
  };
  function testIfNoteControllerIsConstructor() {
    var list = new List;
    var control = new NoteController(list);
    assert.isTrue(control instanceof NoteController);
  };
  function testIfNoteControllerCanChangeIdApp() {

    // var NoteController = function(list) {
    //   list.createNote('Favourite drink: seltzer');
    //   this.showList = new View(list);
    // };

    var listDouble = new List;
    listDouble.createNote("Favourite drink: seltzer");
    var view = new View(listDouble);

    var control = new NoteController(view);

    // control.showList = new View(listDouble);
    View.prototype.display = function() {
      return '<ul><li><div>Favourite food: Margarita</div></li></ul>';
    }

    control.show();

    console.log(document.getElementById('app').innerHTML)

    assert.isTrue(document.getElementById("app").innerHTML ===
    '<ul><li><div>Favourite food: Margarita</div></li></ul>'
    );
    //
    // View.prototype.display = function() {
    //   if (this.list.list().length === 0) { return null };
    //   var html = this.list.list().map(function(item) { return "<li><div>"+item+"</div></li>" }).join("");
    //   return "<ul>"+html+"</ul>";
    // };
  };
  testIfNoteControllerCanChangeIdApp()
  testIfNoteControllerIsConstructor()
  testIfViewIsNull();
  testIfViewIncludesList();
  createNote();
  testNoteToBeANote();
  testInsertionOfNoteToList();
})(this);
