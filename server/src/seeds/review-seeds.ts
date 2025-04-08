import { Review } from '../models/index.js'

export const seedReviews = async () => {
    await Review.bulkCreate([
        {
            review_id: 250,
            content: "Best book ever",
            author: "Jack Black",
        },
        {
            review_id: 255,
            content: "most boring book ever",
            author: "Parker Posey",
        },
    ]);
}