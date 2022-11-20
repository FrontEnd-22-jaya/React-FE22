import AppRouter from "./AppRouter";
import "./assets/css/App.css";
import Navbar from "./Components/Navbar";
import AOS from "aos";

function App() {
  AOS.init();
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AppRouter />
    </div>
  );
}

export default App;
