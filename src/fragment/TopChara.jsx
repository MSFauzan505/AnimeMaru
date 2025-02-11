import React from 'react'
import TopCharaSlider from '../components/SliderImage/TopCharaSlider'

function TopChara({topCharacters, loading}) {
  return (
    <div className='container mx-auto my-5'>
    <h1 className='mx-6 text-3xl font-bold bg-gradient-to-r from-red-400 via-white to-white bg-clip-text text-transparent my-8'>TOP CHARACTERS</h1>
    {loading ? <div className='flex justify-center m-5  p-5 text-3xl text-white'><h1>Loading...</h1></div> : <TopCharaSlider topCharacters={topCharacters} />}
  </div>
  )
}

export default TopChara