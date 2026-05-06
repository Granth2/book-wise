import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Welcome to BookWise 🚀</h1>
      <p>Search and discover books instantly</p>

      <button onClick={() => navigate("/recommend")}>
        Start Exploring 📚
      </button>
    </div>
  );
}