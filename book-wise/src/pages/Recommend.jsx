import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import CategoryButtons from "../Components/CategoryButtons";
import BookCard from "../Components/BookCard";

export default function Recommend() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (searchQuery) => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      const data = await res.json();
      setBooks(data.items || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <h1>Recommendations ⭐</h1>

      {/* 🔍 Search */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={() => fetchBooks(query)}
      />

      {/* 📂 Categories */}
      <CategoryButtons onSelect={(cat) => fetchBooks(cat)} />

      {/* ⏳ Loading */}
      {loading && <p>Loading...</p>}

      {/* 📚 Books */}
      <div className="grid">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}