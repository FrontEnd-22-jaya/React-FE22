import AppRouter from "./AppRouter";
import "./assets/css/App.css";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
