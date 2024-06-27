const express = require('express');
const { getToDo, saveToDo, deleteToDo, updatToDo } = require('../controller/ToDoController');
const router= express.Router()

router.get ('/',getToDo )
router.post ('/save',saveToDo )
router.post ('/update',updatToDo )
router.post ('/delete',deleteToDo )

module.exports=router;