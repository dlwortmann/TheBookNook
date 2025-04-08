import { Movie } from '../models/index.js'

export const seedMovies = async () => {
    await Movie.bulkCreate([
        {
            title: "Dev for Dummies",
            director: "Danny",
            actors: "Jack Black",
            released: "4/5/25",
            poster: "link to poster",
            genre: "Educational",
            plot: "Learn to code"
        },
        {
            title: "Home Alone",
            director: "That one guy",
            actors: "Catherine O'Hara",
            released: "12/25/94",
            poster: "link to poster",
            genre: "Comedy",
            plot: "Ways to stop a burglar"
        },
    ]);
}