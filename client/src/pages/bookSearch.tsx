import React, { useState } from 'react';
import type { Book } from "../interfaces/bookSearch";
import { searchBooks } from "../api/API";

const BookSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('title'); // Default search by title
    const [results, setResults] = useState<any[]>([]); // State to hold search results

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }; //updates searchTerm 

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchType(e.target.value);
    }; //updates searchType

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchType}:${searchTerm}&key=AIzaSyDQcjhcdoE3PMm70oJ9zKA_hAsUZOngLB8`, {
                
            });
            const data = await response.json()
            setResults(data.items || []); // Set results to state
        } catch (error) {
            console.error('Error fetching data from Google Books API:', error);
        }
    };

    return (
        <div>
            <h1>Book Search</h1>
            <select value={searchType} onChange={handleTypeChange}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="subject">Genre</option>
                <option value="isbn">Book Number</option>
            </select>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={`Search by ${searchType}`}
            />
            <button onClick={handleSearch}>Search</button>

            <div>
                <h2>Results:</h2>
                <ul>
                    {results.map((book) => (
                        <li key={book.id}>
                            <h3>{book.volumeInfo.title}</h3>
                            <p>Authors: {book.volumeInfo.authors?.join(', ')}</p>
                            <p>{book.volumeInfo.description}</p>
                            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookSearch;