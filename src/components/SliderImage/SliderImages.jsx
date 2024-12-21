import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function SliderImages({ popularAnime }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            breakpoints={{
                100: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000 }}
            loop={popularAnime.length > 4}
        >
            {popularAnime.map((anime, index) => (
                <SwiperSlide key={anime.mal_id || index}>
                    <a href={anime.url} className="relative flex flex-col sm:mx-3 items-center font-sans my-8 overflow-hidden hover:scale- transform transition ease-in-out" target='_black'>
                        <img
                            src={anime.images.jpg.large_image_url}
                            alt={anime.title}
                            className="w-11/12 h-80 object-cover rounded-md shadow-xl "
                        />
                        <div className='absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent rounded-md'></div>
                        <div className="absolute flex left-16 top-5 opacity-70 justify-center items-center w-1/2">
                            <h3 className="lg:text-xl md:text-lg text-3xl font-bold text-white ">{anime.title}</h3>
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderImages;
