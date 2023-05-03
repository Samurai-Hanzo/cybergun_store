import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <Navbar />

      <MainRoutes />
      {/* <Search /> */}
      <Footer />
    </>
  );
}

export default App;
