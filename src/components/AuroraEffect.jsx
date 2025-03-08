import {animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import React, { useEffect } from 'react'
import BorderAnimation from "./BorderAnimation";
import { FiArrowRight } from "react-icons/fi";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335c', '#ffd400'];
console.log(COLORS[0])

const AuroraEffect = () => {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% , #020617 50% , ${color} )`;
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
    useEffect(() => {

        animate(color , COLORS , {
            ease : 'easeInOut',
            duration : 5,
            repeat : Infinity,
            repeatType : 'mirror',
        })
    }
    , [])
  return (
    <motion.section className='relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200'
     style={{
        backgroundImage: backgroundImage
     }}
    >
        <div className="absolute z-20 md:inset-x-40 flex items-center justify-between">
        <img src="/logo.svg" alt="logo" className="w-30 h-30"  />
        <div className="">
            <BorderAnimation/>
        </div>
        </div>
      <div  className="relative z-10 flex flex-col items-center">

          <span className="bg-neutral-600/50 px-3 py-1.5 rounded-full border-white border-[2px]/50">
          🐧 | Beta version
           </span>
            {/* */}
        <h1 className='max-w-7xl md:text-7xl bg-gradient-to-b from-white to-gray-500 font-capriola text-center text-transparent bg-clip-text font-medium mt-5 leading-tight '>Navigate Your New City</h1>
        <p className='text-center max-w-xl leading-relaxed text-base md:text-lg font-capriola font-light text-neutral-200 my-8'>City Navigator helps People, find restaurants, and attractions with real-time suggestions and an AI chatbot.</p>
        <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        style={{
            border : border, boxShadow : boxShadow}}
        className="group relative z-10 flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 font-outfit font-medium">
            Get Started
        <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars  radius={50} count={2500} factor={4} fade speed={2}/>
        </Canvas>
      </div>
    </motion.section>
  )
}

export default AuroraEffect
