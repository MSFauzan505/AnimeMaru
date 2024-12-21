import React from 'react'
import OnGoingAnime from '../components/SliderImage/OnGoingAnime'

function Ongoing({ onGoing, loading }) {
  return (
    <div className='container mx-auto'>
      <h1 className='mx-6 text-3xl font-bold bg-gradient-to-r from-red-400 via-white to-white bg-clip-text text-transparent'>ON GOING ANIME</h1>
      {loading ? <div className='flex justify-center m-5  p-5 text-3xl text-white'><h1>Loading...</h1> </div> : <OnGoingAnime onGoing={onGoing} />}
    </div>
  )
}

export default Ongoing