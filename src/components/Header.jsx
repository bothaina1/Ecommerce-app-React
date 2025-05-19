import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import LanguageContext from "../context/language";


function Header() {

  const { setLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
      <div className="container-fluid">
        <span className="navbar-brand">E-commerce App</span>

        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Products list
            </Link>
            <Link
              className="nav-link"
              data-toggle="pill"
              to="/product-details/:id"
            >
              Product Details
            </Link>
            <Link className="nav-link" to="/Cart">
              Cart
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" className="nav-link">
                Language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLanguage("ltr")}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguage("rtl")}>Arabic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div>
        <Link className="nav-link mx-5" to="/cart">
          <CartIcon count={30} />
        </Link>
       
      </div>
    </nav>
  );
}

export default Header;
