import { useState } from "react";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>📚 BookWise</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchBooks}>Search</button>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && books.length === 0 && query && <p>No results found</p>}

      <div className="grid">
        {books.map((book) => (
          <div key={book.id} className="card">
            <img
              src={book.volumeInfo?.imageLinks?.thumbnail}
              alt="book"
            />
            <h3>{book.volumeInfo?.title}</h3>
            <p>{book.volumeInfo?.authors?.[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}