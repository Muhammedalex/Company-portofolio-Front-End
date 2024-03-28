import Card from '../card/Card';
import './servMedia.css'

import { motion } from 'framer-motion';
import servmedia1 from '../../img/servmedia1.png'
import servmedia2 from '../../img/servmedia2.png'

import { themeContext } from '../../themContext';
import { useContext } from 'react';
const ServMedia = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {
        duration: 4,
        type: "spring",
      };
  return (
    <div className="serviceMedia" id="services">
        <div className="s-title">
            <span style={{color:darkMode?'white':''}}>
                ميديا
            </span>
        </div>
        <div className="cardsMedia">
            <motion.div
            initial={{ right: "18rem" }}
            whileInView={{ right: "10rem" }}
            transition={transition}
            >
            <Card emoji={servmedia2} heading={'Motion Video'} detail={'جذاب، متحرك، يحكي قصة العلامة التجارية، يثير الانتباه، يعزز التفاعل، فعال في التسويق الرقمي'} />
            </motion.div>
            <motion.div
             initial={{ right:"4rem"}}
             whileInView={{ right: "-4rem" }}
             transition={transition}
            >
            <Card emoji={servmedia1} heading={'Social Media'} detail={'تخطيط وتنفيذ استراتيجيات التواصل، إدارة المحتوى، زيادة التفاعل، تحليل الأداء، تعزيز الحضور الرقمي.'} />
            </motion.div>
        </div>
       
    </div>
  )
}

export default ServMedia