import express from 'express'
//import jwt from 'jsonwebtoken'

//const secret = '8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb'

const app = express()

//Verifacte user
app.use(( req, res, next ) => 
{
    try 
    {
        const token = req.headers.authorization?.split('')[1]
        //const decodeToken = jwt.verify( token, secret )
    
        console.log( token )

        //req.secure = decodeToken
        next()
    } 
    catch (error) {
        res.sendStatus( 401 )
    }
})