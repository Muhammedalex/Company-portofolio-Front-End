import './intro.css';
import { themeContext } from "../../themContext";
import SlideYaf from '../../img/slidepic.webp'
// import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useContext } from 'react';
const IntroProg = () => {
//   const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>يـــاف</span>
          <span>لتطوير البرمجيات</span>
          <span>
            خدمة متكاملة لتطوير أعمالك عن طريق تطبيقات الهاتف والمواقع الإلكترونية
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">تواصل معنا</button>
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={''} alt="" />
          <img src={''} alt="" />
          <img src={''} alt="" />
        </div> */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={SlideYaf} alt="" />
        

        {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div> */}
        {/* <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default IntroProg;
