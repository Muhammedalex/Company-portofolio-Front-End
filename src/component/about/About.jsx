import "./about.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import YafLogo from '../../img/yaflogo122.png'
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { themeContext } from "../../themContext";
import { useContext } from "react";


const About = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  const clients = [
    {
        img: YafLogo,

      review: 'شركتنا متخصصة في تطوير البرمجيات بمصر. نقدم حلولًا ذكية ومبتكرة لتحسين عمليات الشركات. فريقنا ذو خبرة ومهارات عالية، ونستخدم أحدث التقنيات لتلبية احتياجات العملاء بفعالية.'
       },
    {
        img: YafLogo,
      review:
        "نطمح لتصبح شركتنا الرائدة في تطوير البرمجيات، نقدم حلولًا ذكية ومبتكرة، نلتزم بجودة عالية وتلبية احتياجات العملاء، ونسعى لتحسين العمليات",
    },
    {
      img: YafLogo,
    review:
      "إمتلاك موقع علي الويب أصبح ضروري في عصر التكنولوجيا و يفتح افقاً عالمياً ويزيد مصداقية العمل و يسهم في التسويق عبر الإنترنت واْثبتت المواقع اْهميتها في الإستمرار خلال جائحة ( كوفيد 19) وتعكس المواقع الإلكترونية المرونة و الإستمرار في العمل .",
  }

  ];

  return (
    <div className="t-wrapper" id="portfolio">
      <div className="t-heading">
        <span>من نحن ؟</span>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                {/* <h3>{client.title}</h3> */}
                <span style={{color:darkMode?'#8dc6ff':''}}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default About;