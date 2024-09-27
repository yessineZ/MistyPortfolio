import React, { Suspense } from 'react'
import { Canvas} from '@react-three/fiber' ;
import HackerRoom from '../components/HackerRoom';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import { AmbientLight } from 'three';
const Hero = () => {
  return (
     <section className='min-h-screen w-full relative  border-2 border-blue-500'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans '>Hi , I am Misty<span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            <Canvas className='w-full h-full'>
              
              
              <Suspense fallback={<CanvasLoader/>}>


              <HackerRoom scale={0.05} position={[0,0,0]} rotation={[0,-Math.PI / 2 , 0 ]}/>
              <AmbientLight intensity={1}/>
              <directionalLight position={[10,10,10]} intensity={0.5} />
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />              
              
            </Suspense>
            </Canvas>
        </div>
     </section>
  )
}

export default Hero
