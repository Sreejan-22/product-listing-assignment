import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Filters from "./components/Filters/Filters";
import productData from "./products.json";
import "./App.css";

function App() {
  const dataRef = useRef(productData);
  const [data, setData] = useState(productData);
  const [sort, setSort] = useState("none"); // options => none, l2h, h2l

  const clearFilters = () => {
    setSort("none");
    setData(dataRef.current);
  };

  const sortLowToHigh = () => {
    const temp = [...data];
    setData(temp.sort((a, b) => a.price - b.price));
  };

  const sortHightoLow = () => {
    const temp = [...data];
    setData(temp.sort((a, b) => b.price - a.price));
  };

  useEffect(() => {
    if (sort === "l2h") {
      sortLowToHigh();
    } else if (sort === "h2l") {
      sortHightoLow();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Filters
          setData={setData}
          clearFilters={clearFilters}
          sort={sort}
          setSort={setSort}
          sortLowToHigh={sortLowToHigh}
          sortHightoLow={sortHightoLow}
        />
        <Products data={data} />
      </div>
    </div>
  );
}

export default App;
