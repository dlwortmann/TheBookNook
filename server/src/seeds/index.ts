import { seedBooks } from './book-seeds.js';
import { seedUsers } from './user-seeds.js';
import { seedMovies } from './movie-seeds.js';
import { seedReviews } from './review-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedBooks();
    console.log('\n----- BOOKS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedMovies();
    console.log('\n----- MOVIES SEEDED -----\n');


    await seedReviews();
    console.log('\n----- REVIEWS SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();