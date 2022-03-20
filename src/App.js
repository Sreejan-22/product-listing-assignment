import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Filters from "./components/Filters/Filters";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Filters />
        <Products />
      </div>
    </div>
  );
}

export default App;
