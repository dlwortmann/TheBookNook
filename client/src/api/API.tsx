//Movie API
const searchOMDB = async (query: string) => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY
    try {
      console.log(import.meta.env.VITE_OMDB_API_KEY);
      const response = await fetch(
        `https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`
      );
      console.log('Response:', response);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('invalid API response, check the network tab');
      }
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.log('an error occurred', err);
      return null;
    }
  };
  
  export { searchOMDB };

 const searchBooks = async (query: string) => {
    try {
        console.log(import.meta.env.GOOGLE_API_KEY);
        const response = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${import.meta.env.GOOGLE_API_KEY}`);
        console.log('Response:', response);
        const data = await response.json();
        if (!response.ok) {
            throw new Error ('invalid API response, check the network tab');
        }
        console.log('Data:', data);
        return data;
    } catch (err) {
        console.log('an error occured', err);
        return [];
    }
 };
 
 export { searchBooks };