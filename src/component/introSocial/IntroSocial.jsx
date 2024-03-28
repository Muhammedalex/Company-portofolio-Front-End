import  { useContext } from "react";
import "./introSocial.css";
import Xtwit from "../../img/xtwit.png";
import Linkd from "../../img/linkd.png";
import Insta from "../../img/insta.png";
import Facebook from "../../img/faceb.png";
import Yaf from '../../img/yaflogo122.png'
import { themeContext } from "../../themContext";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const IntroSocial = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            يـــاف
          </span>
          <span>لإدارة المحتوى <br />ووسائل التواصل الاإجتماعي</span>
          <span>
          عملية إنشاء وجدولة وتحليل والتفاعل مع المحتوى المنشور على منصات وسائل التواصل الاجتماعي
            <br />
            يشمل ذلك منصات مثل فيسبوك، إنستجرام، تويتر، لينكدإن، وغيرها.
                     </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">تواصل معنا</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          whileHover={{rotate:360}}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Xtwit} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Yaf} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Linkd} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Insta} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default IntroSocial;