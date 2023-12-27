import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="team.png" className="aspect-w-16 aspect-h-9" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="campus.png" className="aspect-w-16 aspect-h-9" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="campus-1.jpg" className="aspect-w-16 aspect-h-9" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="campus-2.jpg" className="aspect-w-16 aspect-h-9" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="campus-3.jpg" className="aspect-w-16 aspect-h-9" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="campus-4.jpg" className="aspect-w-16 aspect-h-9" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="campus-5.jpg" className="aspect-w-16 aspect-h-9" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
