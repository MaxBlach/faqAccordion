import Card from "./components/Card";
import "./css/App.css";

function App() {
  return (
    <>
      <div className="background">
        <img
          className="background-img"
          src="/src/assets/background-pattern-desktop.svg"
        />
        <div className="card">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
