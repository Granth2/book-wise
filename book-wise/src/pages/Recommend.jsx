import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import CategoryButtons from "../Components/CategoryButtons";
import BookCard from "../Components/BookCard";

export default function Recommend() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchBooks = async (searchQuery) => {
    if (!searchQuery) return;

    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      const data = await res.json();
      setBooks(data.items || []);
    } catch (err) {
      setBooks([]);
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <h1>Recommended Books</h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={() => fetchBooks(query)}
      />

      <CategoryButtons onSelect={(cat) => fetchBooks(cat)} />

      {loading && <p className="loading">Loading...</p>}

      {!loading && searched && books.length === 0 && (
        <p className="empty-state">No results found. Try a different search.</p>
      )}

      {books.length > 0 && (
        <div className="grid">
          {books.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      )}
    </div>
  );
}