import { Children, useEffect } from 'react'
import { motion , useTransform , useSpring , useTime , } from 'framer-motion'
const BorderAnimation = () => {
    const time = useTime()
    const rotate = useTransform(time, [0, 3000], [0, 360], {
      clamp: false,
    })
    const rotatingBg = useTransform(rotate, (r) =>  { return  `conic-gradient(from ${r}deg at 50% 50%, #f7ff0a, #ffa026, #f9455b, #ab0478, #5a3ca0, #006ebf, #0090a7, #08a878)`} )
    const pulse = useSpring(0 , {damping : 0 , mass : 5 , stiffness :  10});
   useEffect(
      () => {
        pulse.set(10);
      } , []
    )
    return (
      <main >
        <div className='relative'>
          <button className=' relative z-10 rounded-4xl bg-gradient-to-b from-neutral-900 via-30% to-neutral-700  py-2 hover:bg-neutral-800 transition-colors duration-200  px-4 text-[15px] font-outfit font-semibold'>
          Signup
          </button>
          <motion.div className='absolute bg-yellow-400 -inset-[2px] rounded-4xl '
            style={{
              background: rotatingBg,
            }}
          />

        </div>
      </main>
    )
  }

  export default BorderAnimation
