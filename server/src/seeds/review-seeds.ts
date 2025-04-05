import { Review } from '../models/review.js'

export const seedReviews = async () => {
    await Review.bulkCreate([
        {
            id: 250,
            content: "Best book ever",
            author: "Jack Black",
        },
        {
            id: 255,
            content: "most boring book ever",
            author: "Parker Posey",
        },
    ]);
}