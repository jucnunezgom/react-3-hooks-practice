import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HOOKS</h1>
        <h2>useState()</h2>
        <div>
          <hr />
          <FirstComponent />
          <hr />
        </div>
        <div>
          <SecondComponent />
          <hr />
        </div>
      </header>
    </div>
  );
}

export default App;
