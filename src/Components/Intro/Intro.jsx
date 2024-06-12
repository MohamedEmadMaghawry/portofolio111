import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instgram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion";

const Intro = () => {
  const transtion={duration:2,type:"spring"}
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode?'white':""}}>HEY! I'm </span>
          <span>Mohamed Emad</span>
          <span>
            Frontend Developer with High level of experience in web designing &
            development. Design Your website in a good quality.
          </span>
        </div>
        <button className="i-button button">Hire Me!</button>
        <div className="i-icons">
          <a href="https://github.com/MohamedEmadMaghawry">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-emad-041228306/">
            <img src={Linkedin} alt="" />
          </a>

<a href="https://www.facebook.com/Moham97/"><img src={Instgram} alt="" /></a>
          
        </div>
      </div>
      <div className="i-right">
      <img src={vector1} alt="" />
      <img src={vector2} alt="" />
      <img src={boy} alt="" />
      <motion.img 
      initial={{left:"-36%"}}
      whileInView={{left:'-24%'}}
      transition={transtion}
      src={glassesimoji} alt="" />
      <motion.div 
      initial={{top:'-4%',left:"74%"}}
      whileInView={{left:"68%"}}
      transition={transtion}
      style={{top:"-4%",left:"68%"}}
      className="floating-div">
    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
      </motion.div>
      <motion.div
            initial={{top:'18rem',left:"9rem"}}
            whileInView={{left:"0rem"}}
            transition={transtion}
       style={{top:"18rem",left:"-2rem"}}
       className="floating-div">
    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Awards'/>
      </motion.div>
    <div className="blur" style={{background:"rgb(238 210 255)"}}>

    </div>
    <div className="blur" style={{background:"#C1F5FF",
      top:"17rem",width:"21rem",height:"11rem",left: "-9rem"
    }}>

    </div>
      </div>
    </div>
  );
};

export default Intro;
