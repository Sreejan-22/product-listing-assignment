import { Fragment } from "react";
import "./Filters.css";

const sortBy = ["Low to High", "High to Low"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const brands = ["Eyebogler", "Tokyo Talkies", "HRX", "BEING REAL"];
const genders = ["Female", "Male"];

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <hr className="divider" />
      </div>
      <div className="filters-container">
        <div className="sort">
          <h4 className="filter-name">Sort By</h4>
          <form name="sortBy">
            {sortBy.map((item, index) => (
              <Fragment key={index}>
                <input
                  type="radio"
                  id={`sort-by-${index}`}
                  name={item}
                  value={item}
                />
                <label for={`sort-by-${index}`}> {item}</label>
                <br />
              </Fragment>
            ))}
          </form>
        </div>
        <div className="size">
          <h4 className="filter-name">Size</h4>
          <form name="size" className="size-filters">
            {sizes.map((size, index) => (
              <Fragment key={index}>
                <input type="checkbox" id={size} name={size} value={size} />
                <label for={size}> {size}</label>
                <br />
              </Fragment>
            ))}
            <br />
          </form>
        </div>
        <div className="brand">
          <h4 className="filter-name">Brand</h4>
          <form name="size" className="brand-filters">
            {brands.map((brand, index) => (
              <Fragment key={index}>
                <input type="checkbox" id={brand} name={brand} value={brand} />
                <label for={brand}> {brand}</label>
                <br />
              </Fragment>
            ))}
            <br />
          </form>
        </div>
        <div className="gender">
          <h4 className="filter-name">Ideal for</h4>
          <form name="size" className="gender-filters">
            {genders.map((gender, index) => (
              <Fragment key={index}>
                <input
                  type="checkbox"
                  id={gender}
                  name={gender}
                  value={gender}
                />
                <label for={gender}> {gender}</label>
                <br />
              </Fragment>
            ))}
            <br />
          </form>
        </div>
        <button>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filters;
