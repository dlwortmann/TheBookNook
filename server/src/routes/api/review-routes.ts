import express from 'express';
import { Request, Response } from 'express';
import { Review } from '../../models/review.js';

const router = express.Router();

// get all reviews
router.get('/', async (_req: Request, res: Response) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});