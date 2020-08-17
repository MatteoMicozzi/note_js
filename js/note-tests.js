(function(exports) {

  function testNoteToBeANote() {
    var note = new Note("hi")

    assert.isTrue(note.text === "hi") 
  }

  testNoteToBeANote();
})(this);
