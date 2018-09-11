/**
 * Lets take an example of text editor which keeps saving the state from time to time and that you can restore if you want.
 *
 * First of all we have our memento object that will be able to hold the editor state
 */

class EditorMemento {
  constructor(content) {
    this._content = content
  }
  
  getContent() {
    return this._content
  }
}

// Then we have our editor i.e. originator that is going to use memento object

class Editor {
  constructor(){
    this._content = ''
  }
  
  type(words) {
    this._content = this._content + ' ' + words
  }
  
  getContent() {
    return this._content
  }
  
  save() {
    return new EditorMemento(this._content)
  }
  
  restore(memento) {
    this._content = memento.getContent()
  }
}

(() => {

// And then it can be used as
  
  const editor = new Editor();

// Type some stuff
  editor.type('This is the first sentence.');
  editor.type('This is second.');

// Save the state to restore to : This is the first sentence. This is second.
  const saved = editor.save();

// Type some more
  editor.type('And this is third.');

// Output: Content before Saving
  console.log(editor.getContent());// This is the first sentence. This is second. And this is third.

// Restoring to last saved state
  editor.restore(saved)
  
  console.log(editor.getContent()); // This is the first sentence. This is second.
})();

// TODO: Give another solution here