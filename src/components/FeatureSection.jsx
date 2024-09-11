import React from 'react'
import {features} from "../constants"

function FeatureSection()

{
  return (
    <div className='relative mt-20 border-neutral-800 min-h-[800px]'>
      <div className="text-center">
        <span className='bg-neutral-900 rounded-full text-orange-500 h-6 text-sm font-medium px-2 py-1 uppercase'>Featured</span>
        <h2 className=' text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>Easily build
          <span className='bg-gradient-to-r from-orange-600 to-orange-900 text-transparent bg-clip-text'> your code</span>
        </h2>
        <div className="mt-10 lg:mt-20 flex flex-wrap mx-8 ">
        {
          features.map((feature,index)=>(
            <div  key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex mt-10">
                <div className="flex mx-6 h-10 w-10 bg-neutral-900 justify-center items-center text-orange-800 rounded-full"> {feature.icon} </div>
                <div className="text-justify ">
                  <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                  <p className='mt-2 text-gray-500 text-md'>{feature.description}</p>
                </div>
              </div>
              
              
            </div>
          ))
        }
        </div>
      </div>
      
    </div>
  )
}

export default FeatureSection