import "./App.css";
import ProductCard from "./components/Product/ProductCard";
import Auth from "./components/Auth/Auth";
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
