(function(exports) {

  function testNoteToBeANote() {
    var note = new Note("My favourite language is JavaScript");

    assert.isTrue(note.getText() === "My favourite language is JavaScript");
  };
  function testInsertionOfNoteToList() {
    var note = new Note("First");
    var notes = new List;
    notes.pushToArray(note);
    assert.isTrue(notes.array.includes(note));
  };
  // function testListOfNotes() {
  //   var note1 = new Note("First");
  //   var note2 = new Note("Second");
  //   var note3 = new Note("Third");
  //   var notes = new List;
  //   notes.pushToArray(note1);
  //   notes.pushToArray(note2);
  //   notes.pushToArray(note3);
  //   assert.isTrue(notes.list() === "First, Second, Third");
  // };
  testNoteToBeANote();
  testInsertionOfNoteToList();
  testListOfNotes();
})(this);
