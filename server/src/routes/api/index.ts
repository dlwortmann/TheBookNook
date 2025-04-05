import { Router } from 'express';
import { bookRouter } from './book-routes.js'
import { movieRouter } from './movie-routes.js'
import { reviewRouter } from './review-routes.js'
import { userRouter } from './user-routes.js'

const router = Router();

router.use('/movies', movieRouter);
router.use('/books', bookRouter);
router.use('/reviews', reviewRouter);
router.use('/users', userRouter);

export default router;
 