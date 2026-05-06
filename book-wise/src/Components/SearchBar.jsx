export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}