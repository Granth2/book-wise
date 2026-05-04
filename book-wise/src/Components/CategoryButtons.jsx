export default function CategoryButtons({ onSelect }) {
  const categories = ["fiction", "self help", "mystery", "technology"];

  return (
    <div className="categories">
      {categories.map((cat) => (
        <button key={cat} onClick={() => onSelect(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}