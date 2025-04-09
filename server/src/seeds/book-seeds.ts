import { Book } from '../models/index.js'

export const seedBooks = async () => {
    await Book.bulkCreate([
        {
            isbn: 101,
            title: "Dev for Dummies",
            author: "Danny",
            publishDate: "4/5/25",
            pageCount: 100,
            genre: "Educational",
            description: "Learn to code",
            isMovie: false,
            reviews: ['NA']
        },
        {
            isbn: 102,
            title: "Goosebumps",
            author: "RL Stine",
            publishDate: "8/28/79",
            pageCount: 120,
            genre: "Young Adult",
            description: "Spooky, scary",
            isMovie: false,
            reviews: ['NA']
        },
    ]);
}