const router = require('express').Router();
const {
    getNotes,
    createNote,
    editNote,
    deleteNote
} = require('../../../controllers');

router.get('/', getNotes);

router.post('/', createNote);

router.put('/', editNote);

router.delete('/', deleteNote);

module.exports = router;