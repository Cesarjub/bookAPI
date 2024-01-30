import express from 'express'
import * as booksData from '../services/books'

import { isNumber, isString, toNewBookEntry } from '../utils'

const router = express.Router()

//Endpoint to show list of books
router.get('/', ( req, res ) => {

    const { price, phrase } = req.query

    //Verify that the price parameter has been added to the request
    //Get all the books that are more expensive
    if( price )
    {
        try 
        {
            //Check if the parameter is a number
            const verifyNumber = isNumber( price, 'Incorrect price' )   

            //Get the most expensive prices
            const books = booksData.booksMoreExpensive( verifyNumber )

            //Show if any objects have been found
            books ? res.json( books ) : res.sendStatus( 404 ) 

        } catch (error) {
            res.sendStatus( 400 )  
        }
    }

    //Verify that the phrase parameter has been added to the request
    //
    if( phrase )
    {
        try 
        {
            //Check if it is a string
            const verifyString = isString( req.query.phrase, 'Incorrect phrase' )   
            
            //Find the names of the authors of the books that match the parameter
            const names = booksData.matchName( verifyString )

            //Show if any objects have been found
            names ? res.json( names ) : res.sendStatus( 404 ) 
        
        } catch (error) {
            res.sendStatus( 400 )  
        }
    }

    //If no valid parameter has been added, all books will be shown
    if( !price && !phrase )
    {
        res.json( booksData.getBooks() )
    }
})

//Endpoint to retrieve books by ID
router.get('/:id', ( req, res ) => {

    const id = req.params.id

    if( id === 'average' )
    {
        const average = booksData.getAverage()

        return average 
        ? res.json( average.toFixed(2) )
        : res.sendStatus( 400 )
    }
    
    const book = booksData.findById( id )

    return book 
    ? res.json( book )
    : res.sendStatus( 400 )
})

//Endpoint to create a new book
router.post('/', ( req, res ) => {
    try 
    {
        //Verify that the data is correct
        const newBookEntry = toNewBookEntry( req.body )

        //Send parameters to booksService
        const newBook = booksData.addBook( newBookEntry )
    
        res.json( newBook )
        
    } catch (error) {
        res.sendStatus( 400 )   
    }
})

//Endpoint to get the average cost of each book
/*router.get('/average', ( _req, res ) => {

    const average = booksData.getAverage()

    return average 
    ? res.json( average.toFixed(2) )
    : res.sendStatus( 400 )
})*/

export default router