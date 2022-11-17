import "./App.css";
import Error from "./components/Error";

function App() {
  let data = {
    status: 403,
    description: "Error",
  };
  
  return (
    <div className="App">
      <Error error={data} />
    </div>
  );
}

export default App;
