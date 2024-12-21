import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function TopCharaSlider({ topCharacters }) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        breakpoints={{
          100: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {topCharacters.map((chara, index) => {
          return (
            <SwiperSlide key={chara.mal_id || index}>
              <a href={chara.url} target='_black' className='relative group flex flex-col justify-between items-center border-2 border-red-400'>
                <img src={chara.images.jpg.image_url} alt={chara.name} className='object-contain w-full' />
                <div className='absolute right-1 bottom-1 text-3xl font-bold text-white bg-red-400 py-1 px-2'>{index + 1}</div>
              </a>
              <div className='text-center text-xl sm:text-2xl md:text-3xl text-white font-bold'>
                <h1 className=' my-2'>{chara.name}</h1>
                <p className='text-lg sm:text-xl md:text-2xl font-light text-red-400'>Favorites : {chara.favorites}</p>
              </div>

            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}

export default TopCharaSlider;
