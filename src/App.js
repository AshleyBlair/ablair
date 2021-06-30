import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ABLAIR DEV</h1>
        <h2>Ashley Blair</h2>
        <p>Frontend Developer</p>
      </header>
      <div className="timeline">
        <header className="Timeline-header">Timeline</header>
      </div>
    </div>
  );
}

export default App;
