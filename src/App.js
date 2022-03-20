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

  // const sortLowToHigh = (inputData) => {
  //   const temp = [...inputData];
  //   setData(temp.sort((a, b) => a.price - b.price));
  // };

  // const sortHightoLow = (inputData) => {
  //   const temp = [...inputData];
  //   setData(temp.sort((a, b) => b.price - a.price));
  // };

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
      // temp = temp.filter((item) => currSize.some((size) => ));
      // let temp2 = [];
      // currSize.forEach((size) => {
      //   for (let i = 0; i < temp.length; i++) {
      //     if (temp[i].size.includes(size)) {
      //       temp2.push(temp);
      //       break;
      //     }
      //   }
      // });
      // // remove duplicates
      // temp2 = temp2.filter(
      //   (value, index, self) =>
      //     index === self.findIndex((t) => t.id === value.id)
      // );
      // console.log(temp2);
      // temp = temp2;
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
