const express = require('express')
const {
    index,
    show,
    store,
    update,
    destroy
} = require('../controllers/EmployeeController')

const router = express.Router()

router.post('/', store)
router.get('/', index)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', destroy)



module.exports = router