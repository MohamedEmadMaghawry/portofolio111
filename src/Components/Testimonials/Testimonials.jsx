import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"
import "swiper/css"
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nulla est! Repudiandae tenetur dignissimos autem excepturi sit vero libero at modi exercitationem, perspiciatis iste, natus culpa distinctio neque accusamus porro?",
    },
    {
      img: profilePic2,
      review:
        "       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nulla est! Repudiandae tenetur dignissimos autem excepturi sit vero libero at modi exercitationem, perspiciatis iste, natus culpa distinctio neque accusamus porro?",
    },
    {
      img: profilePic3,
      review:
        "       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nulla est! Repudiandae tenetur dignissimos autem excepturi sit vero libero at modi exercitationem, perspiciatis iste, natus culpa distinctio neque accusamus porro?",
    },
    {
      img: profilePic4,
      review:
        "       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nulla est! Repudiandae tenetur dignissimos autem excepturi sit vero libero at modi exercitationem, perspiciatis iste, natus culpa distinctio neque accusamus porro?",
    },
  ];
  return (
    <div className="t-wrapper" id="Testomonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Expectional Work</span>
        <span>From Me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* swiper */}
      <Swiper 
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable:true}}>
      
      {clients.map((client,index)=>{
        return(
          <SwiperSlide key={index}>
            <div className="testimonials" >
                          <img src={client.img} alt="" />
            <span>{client.review}</span>
            </div>

          </SwiperSlide>
        )
        })}
      </Swiper>
    </div>
  );
};
export default Testimonials;
