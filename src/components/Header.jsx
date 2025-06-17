import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import LanguageContext from "../context/language";

function Header() {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">E-commerce App</span>
        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav me-auto">
            <Link className="nav-link" to="/">
              Products list
            </Link>
          
            <Link className="nav-link" to="/Cart">
              Cart
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" className="nav-link">
                Language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLanguage("ltr")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguage("rtl")}>
                  Arabic
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link mx-3" to="/cart">
              <CartIcon count={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;