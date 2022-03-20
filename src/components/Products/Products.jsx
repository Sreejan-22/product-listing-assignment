import { useState } from "react";
import productData from "../../products.json";
import SortBy from "../SortBy/SortBy";
import "./Products.css";

const Products = () => {
  const [sort, setSort] = useState("popularity"); // options => popularity, lowtoHigh, highToLow
  const [data, setData] = useState(productData);

  return (
    <div className="products">
      {/* SORT OPTIONS */}
      <SortBy sort={sort} setSort={setSort} />

      {/* PRODUCT LIST */}
      <div className="products-list">
        {data.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt="" className="pdt-img" />
            <div className="pdt-brand">{product.brand}</div>
            <div className="pdt-name">{product.name}</div>
            <div className="pdt-price">₹ {product.price}</div>
            <div className="pdt-size">Size {product.size.join(",")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
