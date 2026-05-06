import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Carousel";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="hero-section">
        <div className="hero-copy">
          <span className="hero-label">Recommended Books</span>
          <h1>Welcome to BookWise</h1>
          <p>Explore books like a streaming platform and discover your next favorite read.</p>
          <button className="button-primary" onClick={() => navigate("/recommend")}>Start Exploring</button>
        </div>
        <Carousel />
      </div>
    </div>
  );
}