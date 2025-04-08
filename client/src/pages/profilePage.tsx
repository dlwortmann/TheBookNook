//display username
//display favorited movies
//display favorite books
//display a list of reviews
//a profile page displays data that is already WebGLActiveInfo. find the data, then display it
import React, { useState } from 'react';
import type { UserData } from "../interfaces/userData";

const profilePage = () => {
  const [userData, setUserData] = useState<UserData > ({}as UserData);

  return (
    <div>
      <h1>{userData.username}'s Profile</h1>
      <h2>These are your Favorited Movies</h2>
      <ul>
        {userData.favoriteMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <h2>These are your Favorite Books</h2>
      <ul>
        {userData.favoriteBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <h2>Here are Reviews you have left</h2>
      <ul>
        {userData.reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};
