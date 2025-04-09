import express from 'express';
import { Request, Response } from 'express';
import { Review, ReviewResponse } from '../../models/review.js';

const router = express.Router();

// get all reviews
router.get('/', async (_req: Request, res: Response) => {
    try {
        const reviews = await Review.findAll();

        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

// get all responses to a specific review
// update based on review.ts BECAUSE ITS CURRENTLY NONEXISTENt
router.get('/:id/responses', async (req: Request, res: Response) => {
    try {
        const responses = await ReviewResponse.findAll({
            where: { response_id: req.params.review_id },
        });
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

// add response to review 
router.post('/:id/responses', async (req: Request, res: Response) => {
    const { content, author } = req.body;
    try {
        const response = await ReviewResponse.create({
            //response_id: req.params.response_id,
            content,
            author,
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error adding response.' });
    }
});


// update a response 
router.put('/:id/responses/:id', async (req: Request, res: Response) => {
    try {
        const response = await ReviewResponse.findByPk(req.params.response_id);
        if (!response) {
            return res.status(404).json({ message: 'Response not found.' });
        }
        response.content = req.body.content || response.content;
        await response.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error updating response.' });
    }
});

// delete a response
router.delete('/:id/responses/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await ReviewResponse.destroy({
            where: { response_id: req.params.response_id },
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Response not found.' });
        }
        res.status(200).json({ message: 'Response deleted.' });
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});


// delete a review 
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const reviews = await Review.destroy({
            where: {
                review_id: req.params.id,
            },
        });
        if (!reviews) {
            res.status(404).json({ message: 'No review found.'});
            return;
        }
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
});

export { router as reviewRouter };

    

