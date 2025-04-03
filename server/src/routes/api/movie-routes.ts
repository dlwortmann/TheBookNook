import express from 'express';
import { Request, Response } from 'express';
import { Movie } from '../../models/movie.js';

const router = express.Router();

// get all movies 
router.get('/', async (_req: Request, res: Response) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: "Could not find movie." });
    }
});