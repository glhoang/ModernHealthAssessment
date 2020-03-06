const express = require('express')
const router = express.Router()
const controller  = require('../controllers/controller')

// define the home page route
router.get('/', (req, res) => {
    res.send('home page hello')
})

router.get('/programs', async (req, res) => {
    res.send(await controller.getPrograms({
        id: req.query.id
    }));
})

router.get('/sections', async (req, res) => {
    res.send(await controller.getSections({
        id: req.query.id
    }))
})

router.get('/activities', async (req, res) => {
    res.send(await controller.getActivities({
        id: req.query.id
    }))
})

module.exports = router