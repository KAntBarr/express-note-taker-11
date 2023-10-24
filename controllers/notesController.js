const fs = require('fs/promises');
const Note = require('../lib/Note');
const notes = require('../db/db.json');


const getNotes = (req, res) => {
    console.log("Sending out notes in json.");
    res.json(notes);
}

const createNote = async (req, res) => {

    const {title, text} = req.body;

    if(!title) {
        return res.status(400).json({error: "Title is required"})
    }

    if(!text) {
        return res.status(400).json({error: "Text is required"})
    }

    const newNote = new Note(title, text);

    notes.push(newNote);

    try {
        const promise = fs.writeFile('./db/db.json',JSON.stringify(notes, null, 4));
      
        await promise;
        res.send("Not creating note. COME BACK LATER!");
      } catch (err) {
        // When a request is aborted - err is an AbortError
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
      }
}

const editNote = (req, res) => {
    res.send("Not editing note. COME BACK LATER!")
}

const deleteNote = (req, res) => {
    res.send("Not deleting note. COME BACK LATER!")
}


module.exports = {
    getNotes,
    createNote,
    editNote,
    deleteNote
}
