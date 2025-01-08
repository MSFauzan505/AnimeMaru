import React from 'react'
import MainLayout from '../layout/MainLayout'

function PopularPage({ popularAnime }) {
  return (
    <MainLayout>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2'>
          {popularAnime.map((anime, animeIndex) => {
            return (
              <a
                href={anime.url}
                className="relative w-11/12 h-80 mx-auto group flex flex-col justify-between items-center font-sans mt-8 mb-2 overflow-hidden transform transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
                key={animeIndex}
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
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}

export default PopularPage