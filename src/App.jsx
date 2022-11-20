import AppRouter from "./AppRouter";
import "./assets/css/App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AppRouter />
    </div>
  );
}

export default App;
