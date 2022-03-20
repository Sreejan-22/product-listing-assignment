import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-contents">
        <div className="nav-logo">
          <Logo />
        </div>
        <div className="nav-search">
          <Search />
        </div>
        <div className="nav-login">
          <Button
            variant="contained"
            size="small"
            disableElevation
            sx={{
              backgroundColor: "white",
              color: "#2874f0",
              "&:hover": { backgroundColor: "white", color: "#2874f0" },
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "1.5px",
              padding: "0.15rem 2rem",
            }}
          >
            Login
          </Button>
        </div>
        <div className="nav-more">
          <span>
            Menu <ArrowDropDownIcon />
          </span>
        </div>
        <div className="nav-cart">
          <span>
            <ShoppingCartIcon /> Cart
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
