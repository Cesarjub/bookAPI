import { v4 as uuidv4 } from 'uuid'
import { BooksEntry, NewBookEntry } from '../types'
import booksData from './data.json'

//Specifies the type of data returned by the json file
const books: BooksEntry[] = booksData

//Array of books
export const getBooks = (): BooksEntry[] => books

//Search book ID
export const findById = ( id: string ): BooksEntry | undefined => {
    const obtainedBook = books.find( book => book.id === id )
    return obtainedBook
}

//Add new book
export const addBook = ( NewBookEntry: NewBookEntry ): BooksEntry => {

    const newBook = {
        id: uuidv4(),
        ...NewBookEntry
    }

    //Add new book
    booksData.push( newBook )

    return newBook
}

//Find the most expensive books
export const booksMoreExpensive = ( price: number ): BooksEntry[] | undefined => {

    const obtainedBook = books.filter( book => book.price > price )
    return obtainedBook    
}

//Match Names
export const matchName = ( letter: string ): BooksEntry[] | undefined => {

    const obtainedBook = books.filter( book => book.author.includes(letter) )
    return obtainedBook
}

//Calculate average book prices
export const getAverage = ( ): Number | undefined => {

    const add = books.reduce( (a, b) => a + b.price, 0 )

    const average = add / books.length

    return average
} 
