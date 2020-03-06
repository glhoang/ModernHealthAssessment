const express = require('express')
const router = express.Router()
const controller  = require('../controllers/controller')

router.get('/', (req, res) => {
    res.send('Hello, Modern Health')
})

router.get('/programs', async (req, res) => {
    res.send(await controller.getPrograms({
        id: req.query.id
    }))
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

router.get('/options', async (req, res) => {
    res.send(await controller.getOptions({
        id: req.query.id,
        activity_id: req.query.activity_id
    }))
})

module.exports = router