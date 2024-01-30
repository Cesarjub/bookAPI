import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()
const secret = '8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb'

//Generate JWT
router.post('/', ( _req, res ) => {

    const { id: sub, name } = { id: 1, name: 'user4' }

    const token = jwt.sign({
        sub,
        name,
        'exp': Date.now() + 60 * 1000,
    }, secret)

    res.send({ token })
})

export default router