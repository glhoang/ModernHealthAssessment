const express = require('express')
const router = express.Router()
const controller  = require('../controllers/controller')

// define the home page route
router.get('/', (req, res) => {
    res.send('home page hello')
})

router.get('/programs', async (req, res) => {
    res.send(await controller.getPrograms())
})

router.get('/sections', async (req, res) => {
    res.send(await controller.getSections())
})

router.get('/activities', async (req, res) => {
    res.send(await controller.getActivities())
})

module.exports = router