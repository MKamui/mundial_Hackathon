import "./App.css";
import Error from "./components/Error";

function App() {
  let data = "Error";
  return (
    <div className="App">
      <Error error={data} />
    </div>
  );
}

export default App;
