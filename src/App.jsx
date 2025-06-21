import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <div className=''>
      <h1 className="">Heloo </h1>
    </div>
  )
}

export default App