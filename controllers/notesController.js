const blogs = require('../db/db.json');


const getNotes = (req, res) => {
    res.send("No notes. COME BACK LATER!");
}

const createNote = (req, res) => {
    res.send("Not creating note. COME BACK LATER!")
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
