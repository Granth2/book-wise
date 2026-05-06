export default function BookCard({ book }) {
  const info = book.volumeInfo;

  return (
    <div className="card">
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt="book"
      />
      <h3>{info.title}</h3>
      <p>{info.authors?.[0]}</p>
    </div>
  );
}