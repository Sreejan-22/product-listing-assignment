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
  const [currSize, setCurrSize] = useState([]);
  const [currBrand, setCurrBrand] = useState([]);
  const [currGender, setCurrGender] = useState([]);

  const clearFilters = () => {
    setSort("none");
    setCurrSize([]);
    setCurrBrand([]);
    setCurrGender([]);
    setData(dataRef.current);
  };

  const sortFunc = (inputData) => {
    const temp = [...inputData];
    if (sort === "l2h") {
      setData(temp.sort((a, b) => a.price - b.price));
    } else if (sort === "h2l") {
      setData(temp.sort((a, b) => b.price - a.price));
    }
  };

  useEffect(() => {
    sortFunc(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  useEffect(() => {
    let temp = dataRef.current;
    if (currSize.length > 0) {
      let temp2 = [];
      // iterate through temp; include only if temp.size and currSize have items in common
      temp.forEach((item) => {
        const intersectionArr = item.size.filter((value) =>
          currSize.includes(value)
        );
        if (intersectionArr.length > 0) {
          temp2.push(item);
        }
      });
      temp = temp2;
    }

    if (currBrand.length > 0) {
      temp = temp.filter((item) => currBrand.includes(item.brand));
    }

    if (currGender.length > 0) {
      temp = temp.filter((item) => currGender.includes(item.gender));
    }

    if (sort !== "none") {
      sortFunc(temp);
    } else {
      setData(temp);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currSize, currBrand, currGender]);

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Filters
          setData={setData}
          clearFilters={clearFilters}
          sort={sort}
          setSort={setSort}
          currSize={currSize}
          setCurrSize={setCurrSize}
          currBrand={currBrand}
          setCurrBrand={setCurrBrand}
          currGender={currGender}
          setCurrGender={setCurrGender}
        />
        <Products data={data} />
      </div>
    </div>
  );
}

export default App;
