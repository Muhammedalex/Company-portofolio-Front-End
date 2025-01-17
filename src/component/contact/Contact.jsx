import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { themeContext } from '../../themContext';
const Contact = () => {
    const [done, setDone] = useState(false)
    const form = useRef();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bamz8vh', 'template_shyv5ma', form.current, '0vbXFoq9U8VEomzG7')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form" id="contact">
    {/* left side copy and paste from work section */}
    <div className="w-left">
      <div className="awesome">
        {/* darkMode */}
        <span style={{color: darkMode?'white': ''}}>تواصل معنا</span>
        <span>أرسل بيانات نشاطك لمعرفة عرض سعر</span>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
    </div>
    {/* right side form */}
    <div className="c-right">
      <form ref={form} onSubmit={(e)=>sendEmail(e)}>
        <input type="text" name="from_name" className="user"  placeholder="Name"/>
        <input type="email" name="user_email" className="user" placeholder="Email"/>
        <textarea name="message" className="user" placeholder="Message"/>
        <input type="submit" value={done ? 'Thank you' : 'Send'}  className="button"/>
        <span>{done && "Thanks for Contacting us"}</span>
        <div
          className="blur c-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </form>
    </div>
  </div>  )
}

export default Contact