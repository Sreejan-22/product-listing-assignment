import "./Products.css";

const Products = ({ data }) => {
  // console.log(data);
  return (
    <div className="products">
      <div className="products-list">
        {data.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt="" className="pdt-img" />
            <div className="pdt-brand">{product.brand}</div>
            <div className="pdt-name" title={product.name}>
              {product.name}
            </div>
            <div className="pdt-price">₹{product.price}</div>
            <div className="pdt-size">Size {product.size.join(",")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
