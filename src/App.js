import { useState, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Filters from "./components/Filters/Filters";
import productData from "./products.json";
import "./App.css";

function App() {
  const dataRef = useRef(productData);
  const [data, setData] = useState(productData);
  const [sort, setSort] = useState("none"); // options => none, lowtoHigh, highToLow

  const clearFilters = () => {
    setData(dataRef.current);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Filters
          setData={setData}
          clearFilters={clearFilters}
          sort={sort}
          setSort={setSort}
        />
        <Products data={data} />
      </div>
    </div>
  );
}

export default App;
