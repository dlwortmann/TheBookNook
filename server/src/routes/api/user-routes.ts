import express from 'express';
import { Request, Response } from 'express';
import { User } from '../../models/user.js';

const router = express.Router();

// get all users 
router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
     });
     res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// get users by id
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id,{
            attributes: { exclude: ['password'] }
        });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// create new user 
// edit based on what danny puts in user.ts !!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.post('/', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await User.create({ username, email, password });
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

//update user by id
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (user) {
            user.username = username;
            user.password = password;
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error: any) {}
})