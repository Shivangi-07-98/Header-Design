import React, {useEffect, useState} from 'react'
import Background from './Background/Background'
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';

function Manage() {
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"},
  ]
    
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
     setInterval(() => {
      setHeroCount((count) => {return count===2?0:count+1})
     }, 3000);
  }, [])

  return (
    <>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} setPlayStatus={setPlayStatus}/>
    </>
  )
}

export default Manage