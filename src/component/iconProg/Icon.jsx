import './icon.css';
import icon1 from '../../img/icon1.webp';
import icon2 from '../../img/icon2.webp';
import icon3 from '../../img/icon3.webp';
import icon4 from '../../img/icon4.webp';
import icon5 from '../../img/icon5.webp';
import icon6 from '../../img/icon6.webp';
import icon7 from '../../img/icon7.webp';



const Icon = () => {
    // const icons = ["./icon1.webp","./icon2.webp","./icon3.webp","./icon4.webp","./icon5.webp","./icon6.webp","./icon7.webp"]
  return (
    <div className='container'>
    <div className='icon-title'>Loved By Developers, Trusted By Enterprises</div>
    <div className="icon-container">
        <img src={icon1} alt='' />
        <img src={icon2} alt='' />
        <img src={icon3} alt='' />
        <img src={icon4} alt='' />
        <img src={icon5} alt='' />
        <img src={icon6} alt='' />
        <img src={icon7} alt='' />

    </div>
    <div className="icon-container-culmon">
    <img src={icon1} alt='' />
        <img src={icon2} alt='' />
        <img src={icon3} alt='' />
        <img src={icon4} alt='' />
        <img src={icon5} alt='' />
        <img src={icon6} alt='' />
        <img src={icon7} alt='' />
        
            </div>
    </div>
  )
}

export default Icon