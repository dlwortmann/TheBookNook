
import React, { useState, useEffect } from 'react';
import { searchBooks } from '../api/API';

const BookSearch = () => {
  const [query, setQuery] = useState(''); // State to handle the search query
  const [books, setBooks] = useState<any[]>([]); // State to store fetched books
  const [favorites, setFavorites] = useState<any[]>([]); // State to store favorite books

  // Fetch books when query changes
  useEffect(() => {
    if (query) {
      searchBooks(query).then(data => setBooks(data.items || [])); // Use searchBooks to fetch data
    }
  }, [query]);

  // Handle the search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update the query on user input
  };

  // Toggle a book as favorite or remove it
  const toggleFavorite = (book: any) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(b => b.id === book.id)) {
        // If the book is already in favorites, remove it
        return prevFavorites.filter(b => b.id !== book.id);
      }
      // Otherwise, add it to favorites
      return [...prevFavorites, book];
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for books..."
      />
      <div>
        <h2>Search Results</h2>
        {books.length > 0 ? (
          <ul>
            {books.map((book: any) => (
              <li key={book.id}>
                <div>
                  <h3>{book.volumeInfo.title}</h3>
                  <button onClick={() => toggleFavorite(book)}>
                    {favorites.some((b) => b.id === book.id)
                      ? 'Remove from Favorites'
                      : 'Add to Favorites'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ): (
          <p>No books found. Try a different search.</p>
        )}
      </div>

      <div>
        <h2>My Favorite Books</h2>
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((book: any) => (
              <li key={book.id}>
                <div>
                  <h3>{book.volumeInfo.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorite books yet.</p>
        )}
      </div>
    </div>
  );
};

export default BookSearch;