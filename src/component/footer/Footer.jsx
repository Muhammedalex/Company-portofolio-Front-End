import "./footer.css";
import Wave from "../../img/footer.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  const face = "https://web.facebook.com/yafegdev";
  const linkin = "https://www.linkedin.com/in/yafegy/";
  // const map = 'https://maps.app.goo.gl/WFfFGuphz7ofGog86'
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>yafeg@gmail.com</span>
        <div className="f-icons">
        <a href="#"> <Insta color="white" size={"3rem"} /></a>
          <a href={face} target="_blank" rel="noreferrer"> <Facebook color="white" size={"3rem"} /></a>
          <a href={linkin} target="_blank" rel="noreferrer"> <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;