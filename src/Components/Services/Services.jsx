import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf"
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion";
const Services = () => {
  const transtion={duration:2,type:"spring"}
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div>
      <div className="services" id="Services">
        <div className="awesome">
          <span style={{color:darkMode?"white":''}}>My Awesome </span>
          <span>Services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br /> Veritatis cupiditate odit recusandae minus pariatur inventore
            nesciunt beatae accusamus.
          </span>
          <a href={Resume} ><button className="button s-button">Download CV</button></a>
          
          <div className="blur s-blur" style={{background:"#abf1ff94"}}></div>
        </div>

        <div className="cards">
           <motion.div
           whileInView={{left:"9rem"}}
           initial={{left:"14rem"}}
           transition={transtion}
           
           style={{left:'9rem'}}>
            <Card emoji={HeartEmoji}
            heading={'Design'}
            details={"figma,sketch,photoshop,adobe"}/>
           </motion.div>
           <motion.div 
           
           whileInView={{left:"-5rem"}}
           initial={{left:"-15rem"}}
           transition={transtion}
           
           style={{left:'-5rem',top:"12rem"}}>
            <Card emoji={Glasses}
            heading={'Developer'}
            details={"figma,sketch,photoshop,adobe"}/>
           </motion.div>
           <motion.div 
                      
                      whileInView={{left:"7.5rem"}}
                      initial={{left:"13rem"}}
                      transition={transtion}
           
           style={{left:'7.5rem',top:"19rem"}}>
            <Card emoji={Humble}
            heading={'UI/UX'}
            details={"figma,sketch,photoshop,adobe"}/>
           </motion.div>
           <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
