import { useContext } from "react";
import { themeContext } from "../../themContext";
import "./card.css";

const Card = ({emoji, heading, detail, color}) => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <div>
      <img src={emoji} alt="" />
      </div>
      <span>{heading}</span>
      <span style={{color:darkMode?'#8dc6ff':''}}>{detail}</span>
      {/* <button className="c-button">اعرف أكثر</button> */}
    </div>
  );
};

export default Card;