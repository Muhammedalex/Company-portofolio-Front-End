
import './App.css'
import Navbar from './component/navbar/Navbar'
import IntroProg from './component/introProg/IntroProg';
import { themeContext } from "./themContext";
import { useContext } from "react";
import ServProg from './component/servProg/ServProg';
import Icon from './component/iconProg/Icon';
import IntroSocial from './component/introSocial/IntroSocial';
import ServMedia from './component/servMedia/ServMedia';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{
      background:darkMode? '#242424':'',
      color:darkMode?'white':''
    }}
    >
      <Navbar />
      <IntroProg />
      <ServProg />
      <Icon />
      <IntroSocial />
      <ServMedia />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
