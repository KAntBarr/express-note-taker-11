// const idGenerator = requires({npm id module});

class Note {
    constructor(title = '', text = '') {
        this.title = title;
        this.text = text;
        this.id = '1';
        // this.uuid = idGenerator.newID();
    }

    static updateTitle(note, title) {
        console.log("notes title");
    }

    static updateText(note, text) {
        console.log("notes body");
        
    }
}

module.exports = Note;