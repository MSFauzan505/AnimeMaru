import React from 'react';

function HightLightAnime({popularAnime}) {
  const displayedGenres = new Set(); 

  return (
    <div className='container mx-auto flex justify-center flex-wrap items-center gap-3 my-20'>
      {popularAnime.map((anime, index) => {
        
        const uniqueGenre = anime.genres.find(genre => !displayedGenres.has(genre.name));

        if (uniqueGenre && displayedGenres.size < 20) {
          displayedGenres.add(uniqueGenre.name); 

          return (
            <a
              href={anime.url || '#'}
              key={index}
              className='relative overflow-hidden group py-3 px-8 font-sans font-semibold rounded-md shadow-xl border-2 border-red-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-transparent to-slate-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              <h1 className='text-white text-xl'>{uniqueGenre.name}</h1>
            </a>
          );
        }

        return null; 
      })}
    </div>
  );
}

export default HightLightAnime;
