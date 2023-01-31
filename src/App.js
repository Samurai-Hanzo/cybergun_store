import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./MainRoutes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;
