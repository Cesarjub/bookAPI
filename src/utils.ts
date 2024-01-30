import { NewBookEntry } from './types'

//Check if the string is correct
export const isString = ( string: any, message: string ): string => {
    if( typeof string !== 'string' ) {
        throw new Error( message )
    }
    return string
}

//Check if the number is correct
export const isNumber = ( number: any, message: string ): number => {
    if( isNaN( +number )  ) {
        throw new Error( message )
    }
    return number
}

//Verify that the data is correct
export const toNewBookEntry = ( object: any ): NewBookEntry => {
    
    const newBook: NewBookEntry = 
    {
        title: isString( object.title, 'Incorrect title' ),
        author: isString( object.author, 'Incorrect name of author' ),
        price: isNumber( object.price, 'Incorrect price' ),
        availability: isNumber( object.availability, 'Incorrect number of available books' ),
        num_reviews: isNumber( object.num_reviews, 'Incorrect number of reviews' ),
        stars: isNumber( object.stars, 'Incorrect numbers of stars' ),
        description: isString( object.description, 'Incorrect description' ),
    }

    return newBook
}

//export default toNewBookEntry