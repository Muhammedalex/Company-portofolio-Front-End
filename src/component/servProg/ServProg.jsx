// import { useContext } from 'react';
import Card from '../card/Card';
import './servprog.css';
import CardWidth from '../cardWidth/CardWidth';
import { motion } from 'framer-motion';
import serv1 from '../../img/serv1.png'
import serv2 from '../../img/serv2.png'
import serv3 from '../../img/serv3.png'
import serv4 from '../../img/serv4.png'
import serv5 from '../../img/serv5.png'
import { themeContext } from '../../themContext';
import { useContext } from 'react';
const ServProg = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {
        duration: 1,
        type: "spring",
      };
  return (
    <div className="services" id="services">
        <div className="s-title">
            <span style={{color:darkMode?'white':''}}>
                برمجيات
            </span>
        </div>
        <div className="cards">
            <motion.div
            initial={{ left: "18rem" }}
            whileInView={{ left: "-10rem" }}
            transition={transition}
            >
            <Card emoji={serv1} heading={'مدونة تعريفية'} detail={'منصة عبر الإنترنت تقدم محتوى متنوع عن مواضيع شيقة ومفيدة. يشجع على التفاعل والتبادل الشخصي للأفكار والتجارب.'}/>
            </motion.div>
            <motion.div
             initial={{ left:"18rem"}}
             whileInView={{ left: "4rem" }}
             transition={transition}
            >
            <Card emoji={serv2} heading={'متجر إلكتروني'} detail={'منصة عبر الإنترنت لشراء وبيع المنتجات بشكل آمن وفعال. تجربة تسوق مريحة وإمكانيات توسيع الأعمال.'} />
            </motion.div>
            <motion.div
             initial={{ left: "18rem" }}
             whileInView={{ left: "18rem" }}
             transition={transition}
            >
            <Card emoji={serv3} heading={'تطبيقات الهاتف'} detail={'يقدم وظائف عبر واجهة سهلة. مثال: التواصل، التسوق، يلبي احتياجات المستخدمين في أي مكان وزمان.'} />
            </motion.div>
            <motion.div
             initial={{ left: "18rem" }}
             whileInView={{ left: "32rem" }}
             transition={transition}
            >
            <Card emoji={serv4} heading={'أنظمة إدارة المنشأة'} detail={'نظام يكامل ويوحد إدارة العمليات التجارية، مثل المحاسبة والإنتاج والمخزون، لتحسين الكفاءة واتخاذ قرارات مستنيرة.'} />
            </motion.div>
            <motion.div
             initial={{ left: "18rem" }}
             whileInView={{ left: "46rem" }}
             transition={transition}
            >
            <Card emoji={serv5} heading={'أنظمة نقاط البيع'} detail={'نظام تقني لإتمام معاملات المبيعات، يتيح تسجيل المبيعات وإدارة المخزون وتيسير عمليات الدفع.'} />
            </motion.div>
        </div>
        <div className="cards-1399">
           <div style={{display:'flex',gap:10}}>
           <div
            >
            <CardWidth emoji={serv1} heading={'مدونة تعريفية'} detail={'منصة عبر الإنترنت تقدم محتوى متنوع عن مواضيع شيقة ومفيدة. يشجع على التفاعل والتبادل الشخصي للأفكار والتجارب.'}/>
            </div>
            <div
           
            >
            <CardWidth emoji={serv2} heading={'متجر إلكتروني'} detail={'منصة عبر الإنترنت لشراء وبيع المنتجات بشكل آمن وفعال. تجربة تسوق مريحة وإمكانيات توسيع الأعمال.'} />
            </div>
           </div>
            <div style={{display:'flex',gap:10}}>
            <div
            
            >
            <CardWidth emoji={serv3} heading={'تطبيقات الهاتف'} detail={'يقدم وظائف عبر واجهة سهلة. مثال: التواصل، التسوق، يلبي احتياجات المستخدمين في أي مكان وزمان.'} />
            </div>
            <div
             
            >
            <CardWidth emoji={serv4} heading={'أنظمة إدارة المنشأة'} detail={'نظام يكامل ويوحد إدارة العمليات التجارية، مثل المحاسبة والإنتاج والمخزون، لتحسين الكفاءة واتخاذ قرارات مستنيرة.'} />
            </div>
            </div>
            <div
            
            >
            <CardWidth emoji={serv5} heading={'أنظمة نقاط البيع'} detail={'نظام تقني لإتمام معاملات المبيعات، يتيح تسجيل المبيعات وإدارة المخزون وتيسير عمليات الدفع.'} />
            </div>
        </div>
       
    </div>
  )
}

export default ServProg