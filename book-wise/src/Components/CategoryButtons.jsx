export default function CategoryButtons({ onSelect }) {
  const categories = ["Fiction", "Self Help", "Mystery", "Technology"];

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