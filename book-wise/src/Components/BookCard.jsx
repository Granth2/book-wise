export default function BookCard({ book }) {
  const info = book.volumeInfo;
  const author = info.authors ? info.authors[0] : 'Unknown Author';

  return (
    <div className="card">
      <img
        className="card-image"
        src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/220x320?text=No+Cover'}
        alt={info.title}
      />
      <div className="card-info">
        <h3 className="card-title">{info.title}</h3>
        <p className="card-author">{author}</p>
      </div>
    </div>
  );
}