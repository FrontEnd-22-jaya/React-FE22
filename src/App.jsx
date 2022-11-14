import AppRouter from "./AppRouter";
import "./assets/css/App.css";
import Copyright from "./Components/Copyright";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
