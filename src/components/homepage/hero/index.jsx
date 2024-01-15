
import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Hero = () => {
  return (
    <div>
       <div className="bg-sky-100  w-full h-[26.5rem] border rounded-[2rem]">
       <div className=" w-full h-96 ">
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="/images/firstimg.jpg" alt="img" /></SwiperSlide>
      <SwiperSlide><img src="/images/secondimg.jpg" alt="img" /></SwiperSlide>
      <SwiperSlide><img src="/images/thirdimg.jpg" alt="img" /></SwiperSlide>
      <SwiperSlide><img src="/images/fourthimg.jpg" alt="img" /></SwiperSlide>
      <SwiperSlide><img src="/images/fifthimg.jpg" alt="img" /></SwiperSlide>
      <SwiperSlide><img src="/images/sixthimg.jpg" alt="img" /></SwiperSlide>
      <SwiperSlide><img src="/images/seventhimg.jpg" alt="img" /></SwiperSlide>
    
    </Swiper>
 

        </div>
           <div className='flex gap-2 justify-center items-between text-xs pt-3'>
           <i class="fa-solid fa-virus"></i>
           <p>
Safety precautions during COVID-19. We’re taking additional steps and precautionary measures to protect our community from COVID-19.</p>
  <span>Know more <i class="fa fa-angle-right " aria-hidden="true" style={{background:'black', borderRadius:'50%', color:'white', fontSize:'10px',padding:'3px 5px'}}></i></span>
           </div>
       </div>
    </div>
  )
}

export default Hero
