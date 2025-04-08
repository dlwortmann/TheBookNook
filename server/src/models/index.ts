import sequelize from "../config/connection.js";
import { BookFactory } from "./book.js";
import { MovieFactory } from "./movie.js";
import { ReviewFactory } from "./review.js";
import { UserFactory } from "./user.js";

const Book = BookFactory(sequelize);
const Movie = MovieFactory(sequelize);
const Review = ReviewFactory(sequelize);
const User = UserFactory(sequelize);
 
export { Book, Movie, Review, User }