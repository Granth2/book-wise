export default function CategoryButtons({ onSelect }) {
  const categories = ["fiction", "self help", "mystery", "technology"];

  return (
    <div className="btns">
      {categories.map((cat) => (
        <button key={cat} onClick={() => onSelect(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}