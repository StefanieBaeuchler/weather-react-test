import "./App.css";
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <Weather defaultCity="Vienna" />
      <p className="credits">
        <a href="https://github.com/StefanieBaeuchler/weather-app-react">
          Open source code
        </a>
        {""} by Stefanie Bäuchler
      </p>
    </div>
  );
}

export default App;
