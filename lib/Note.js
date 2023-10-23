class Note {
    constructor(title = '', body = '') {
        this.title = title;
        this.body = body;
    }

    updateTitle(title) {
        console.log("notes title");
    }

    updateBody(body) {
        console.log("notes body");
        
    }
}

module.exports = Note;