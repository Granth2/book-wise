import { useEffect, useState } from "react";

const featuredBooks = [
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    image: "https://images.unsplash.com/photo-1544938948-6aa94c7f3f18?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredBooks.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {featuredBooks.map((book, index) => (
        <div
          key={book.title}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${book.image})` }}
        >
          <div className="slide-overlay" />
          <div className="carousel-info">
            <span className="carousel-tag">Featured</span>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
