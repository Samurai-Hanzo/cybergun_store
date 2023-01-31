import "./App.css";

import Footer from "./components/Footer/Footer";
import Review from "./components/Review/Review";
import Auth from "./components/Auth/Auth";
import ProductCard from "./components/Product/ProductCard";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import StoreHeader from "./components/StoreHeader/StoreHeader";


function App() {
  return (
    <div className="App">

      {/* <Auth /> */}
      <Navbar />
      <Header />
      {/* <StoreHeader /> */}

      <ProductCard />
    </div>
  );
}

export default App;
