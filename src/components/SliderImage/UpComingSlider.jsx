import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

function UpComingSlider({ upComingAnime }) {

    const uniqueUpComing = upComingAnime.filter((anime, index, self) =>
        index === self.findIndex((t) => (
            t.mal_id === anime.mal_id
        ))
    );
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Scrollbar, FreeMode]}
                slidesPerView={2}
                mousewheel={true}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 }
                }}
                loop={true}
            >
                {uniqueUpComing.map((anime, index) => (
                    <SwiperSlide key={anime.mal_id || index}>
                        <a
                            href={anime.url}
                            className="relative group flex flex-col justify-between items-center  font-sans mt-8 mb-2 overflow-hidden transform transition-all duration-300 hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={anime.images.jpg.large_image_url}
                                alt={anime.title}
                                className="w-11/12 h-80 object-cover rounded-md shadow-xl"
                            />
                            <div className='absolute bottom-5 left-5 flex gap-1 flex-wrap px-3'>
                                {anime.genres.slice(0, 3).map((genre, genreIndex) => (
                                    <div
                                        key={genreIndex}
                                        className="rounded-sm text-white text-sm sm:text-[15px] bg-red-400 opacity-100 sm:opacity-0
                                         group-hover:opacity-100 sm:group-hover:bg-red-400 
                                         transition-all duration-300 flex items-center px-1.5"
                                    >
                                        {genre.name}
                                    </div>
                                ))}
                            </div>
                            <button className='absolute top-0 right-5 bg-red-400 text-white hover:bg-red-500 w-10 h-10 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-2xl'>
                                +
                            </button>
                        </a>
                        <h3 className="lg:text-lg md:text-lg text-[16px] font-semibold mx-3 text-white">
                            {anime.title}
                        </h3>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
}

export default UpComingSlider;
