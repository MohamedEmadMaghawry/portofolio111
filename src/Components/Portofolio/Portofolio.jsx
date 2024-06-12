import React from 'react'
import"./Portofolio.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import Gemini from "../../img/Gemini.png"
import Ecommerce from "../../img/ecommerce.png"
import Quran from "../../img/quraan.png"
import Car from "../../img/car.png"
import 'swiper/css';
import { themeContext } from "../../Context";
import { useContext } from "react";
const Portofolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
<div className="portofolio" id='Portofolio'>
    <span style={{color:darkMode?"white":''}}>Recent Projects</span>
    <span>Portofolio</span>

    <Swiper 
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portofolio-slider'>

        <SwiperSlide>
           <a target="_blank" href="https://geimini-six.vercel.app/"><img src={Gemini} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
           <a target="_blank" href="https://ecommerce-nine-ivory.vercel.app/"><img src={Ecommerce} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
           <a target="_blank" href="https://quraan-kareem-psi.vercel.app/"><img src={Quran} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
            <a target="_blank" href="https://carwebsite-swart.vercel.app/"><img src={Car} alt="" /></a>
        </SwiperSlide>

    </Swiper>
</div>
  )
}

export default Portofolio
