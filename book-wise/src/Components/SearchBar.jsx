export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}