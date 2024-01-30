import express from 'express'

import helloRouter from './routes/hello'
import booksRouter from './routes/books'
import authRouter from './routes/auth'

const app = express()

const PORT = 3000

//Middleware req to json
app.use( express.json() )

//Endpoint
app.get('/', (_req, res) => {
    res.send('Server running')
})

//Middleware hello world
app.use('/hello', helloRouter)

//Middleware books
app.use('/books', booksRouter)

//Middleware books
app.use('/auth', authRouter)

//Port where the application will listen to requests
app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`)
})
