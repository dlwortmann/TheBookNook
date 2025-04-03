import express from 'express';
import { Request, Response } from 'express';
import { Book } from '../../models/book.js';

const router = express.Router();

// get all books?
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