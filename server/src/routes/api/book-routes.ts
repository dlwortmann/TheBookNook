import express from 'express';
import { Request, Response } from 'express';
import { Book } from '../../models/book.js';

const router = express.Router();

// get all books
router.get('/', async (_req: Request, res: Response) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: "Could not find book." });
    }
});

// get book by isbn
router.get('/:isbn', async (req: Request, res: Response) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

// add a new book
router.post('/', async (req: Request, res: Response) => {
    const { isbn, title, author, publishDate, pageCount, genre, description, isMovie, reviews } = req.body;
    try {
        const existingBook = await Book.findByPk(isbn);
        if (existingBook) {
            return res.status(400).json({ error: 'Error' });
        }
        const newBook = await Book.create({
            isbn,
            title,
            author,
            publishDate,
            pageCount,
            genre,
            description,
            isMovie,
            reviews: reviews || [],
        });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ error: 'Error' });
    }
});

// update book details by isbn
router.put('/:isbn', async (req: Request, res: Response) => {
    try {
        const book = await Book.findByPk(req.params.isbn);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        const { isbn, title, author, publishDate, pageCount, genre, description, isMovie, reviews } = req.body;

        book.title = title || book.title;
        book.author = author || book.author;
        book.publishDate = publishDate || book.publishDate;
        book.pageCount = pageCount || book.pageCount;
        book.genre = genre || book.genre;
        book.description = description || book.description;
        book.isMovie = isMovie !== undefined ? isMovie : book.isMovie;
        book.reviews = reviews || book.reviews;

        await book.save();
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ error: 'Error' });
    }
});


// delete book 
router.delete('/:isbn', async (req: Request, res: Response) => {
    try {
        const deleted = await Book.destroy({
            where: { isbn: req.params.isbn }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Book not found.' });
        }
        res.status(200).json({ message: 'Book deleted.' });
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

export default router;