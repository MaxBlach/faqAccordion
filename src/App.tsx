import Card from "./components/Card";
import "./css/App.css";
import "typeface-work-sans";

function App() {
  return (
    <>
      <div className="background">
        <img
          className="background-img"
          src="/src/assets/background-pattern-desktop.svg"
        />
        <div className="card">
          <Card title="FAQs" />
        </div>
      </div>
    </>
  );
}

export default App;
