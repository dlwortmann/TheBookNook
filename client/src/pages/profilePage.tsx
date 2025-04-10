//display username
//display favorited movies
//display favorite books
//display a list of reviews
//a profile page displays data that is already WebGLActiveInfo. find the data, then display it
import React, { useState } from 'react';
import type { UserData } from "../interfaces/userData";

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData > ({
    id: null,
    email: null,
    username: '',
    password: null,
    favoriteMovies: [],
    favoriteBooks: [],
    reviews: []
  });

  return (
    <div>
      <h1>{userData.username}'s Profile</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2>Favorite Movies</h2>
          <ul>
            {userData.favoriteMovies?.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
        
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2>Favorite Books</h2>
          <ul>
            {userData.favoriteBooks?.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </div>
    
        <div style={{ flex: 1 }}>
          <h2>Your Reviews</h2>
          <ul>
            {userData.reviews?.map((review) => (
              <li key={review.id}>{review.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
   )
  };

  export default ProfilePage;
      