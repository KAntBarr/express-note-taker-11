const shortid = require('shortid');

class Note {
    constructor(title = '', text = '') {
        this.title = title;
        this.text = text;
        this.id = `${shortid.generate()}`;
    }

    static updateTitle(note, title) {
        console.log("notes title");
    }

    static updateText(note, text) {
        console.log("notes body");
        
    }
}

module.exports = Note;