import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4"


function HeroSection() {
  return (
    <div className='max-w-7xl mx-auto pt-20 px-6'>
        <div className="flex flex-col items-center lg:mt-20">
<h1 className='text-4xl tracking-wide sm:text-6xl lg:text-7xl text-center'>
VrtualR build tools <span className='bg-gradient-to-r from-orange-600 to-orange-800 text-transparent bg-clip-text'>for <br /> developers</span>
</h1>
<p className='text-gray-600 mt-10 text-center'>Empower your creativity and bring your VR apps ideas to life with our intuitive development tools. <br />
Get started today and turn your imagination into immersive reality</p>
<div className="flex gap-4 items-center justify-center mt-10">
    <button className='border rounded-md px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-800'>Start for free</button>
    <button className='border rounded-md px-4 py-2 bg-transparent'>Documentation</button>
</div>
<div className="flex gap-2 justify-center mt-10">
    <video autoPlay loop muted  className="border border-orange-800 rounded-lg shadow-orange w-1/2" src={video1}></video>
    <video autoPlay loop muted  className="border border-orange-800 rounded-lg shadow-orange w-1/2" src={video2}></video>
</div>
        </div>
    </div>
  )
}

export default HeroSection