import Toggle from "../toggle/Toggle";
import "./navbar.css";
import { Link } from "react-scroll";
import YAF from "../../img/logoyaaf.webp"
import YAFLight from "../../img/logoyaaf1.png"
import { useContext } from "react";
import { themeContext } from "../../themContext";

const Navbar = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name"><img src={darkMode?YAF:YAFLight} alt=""/></div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                برمجيات
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                ميديا
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                من نحن
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">عرض سعر</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
