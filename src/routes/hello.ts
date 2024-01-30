import express from 'express'

const router = express.Router()

//Endpoint that responds with Hello World
router.get('/', ( _req, res ) => {
    res.send('Hello, world!')
})

export default router