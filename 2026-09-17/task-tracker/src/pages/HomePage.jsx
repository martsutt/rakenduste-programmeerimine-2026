import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Tere</h1>
      <p>Ma ei tea mida siia kirjutada.</p>
      <Link to="/tasks">View your tasks</Link>
    </div>
  );
}

export default HomePage;
