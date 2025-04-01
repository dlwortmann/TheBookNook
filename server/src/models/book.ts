interface BookAttributes {
    isbn: number
    title: string;
    author: string;
    publishDate: string;
    pageCount: number;
    genre: string;
    description: string;
    isMovie?: boolean;
    reviews: string[];
}

interface BookCreationAttributes extends Optional<BookAttributes, 'isbn'> {}

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
    
}