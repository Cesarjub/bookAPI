export interface BooksEntry {
    id: string,
    title: string,
    author: string,
    price: number,
    availability: number,
    num_reviews: number,
    stars: number,
    description: string,
}

//Data type specification - omits id
export type NewBookEntry = Omit<BooksEntry, 'id'>