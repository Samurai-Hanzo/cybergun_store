import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import Auth from "./components/Auth/Auth";

import ProductCard from "./components/Product/ProductCard";

function App() {
  return (
    <div className="App">
          <Navbar />
   <Auth />

      <ProductCard />
    </div>
  );
}

export default App;
