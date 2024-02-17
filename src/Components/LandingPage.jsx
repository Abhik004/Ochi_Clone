import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import ochilogo from '../assets/ochilogo.png'
function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
    <div className='textstructure mt-52 px-20'>
    {["We Create","Eye Opening","Presentations"].map((item,index)=>{
        return( <div className='masker'>
        {/* tracking tighter to bring letters closer... p-2 to check the margins */}
        <div className='w-fit flex pt-3'>
        {index === 1 && (<motion.div initial={{width:0}} animate={{width: "8vw", height: "5.7"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='w-[8vw] h-[5.7vw] mr-[1vw] rounded relative'><img className='bg-cover rounded-md' src={ochilogo}/></motion.div>)}
        <h1 className="uppercase font-medium text-[7.5vw] leading-[5.5vw] tracking-tighter font-['Founders_Grotesk']">{item}</h1>
        </div>
        </div>
        );
    })}
    </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full hover:bg-white hover:text-[#0e2a26]'>Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400 hover:bg-white hover:text-[#0e2a26]'><span className='rotate-[45deg]'><FaArrowUpLong /></span>
            </div>
            </div>
        </div>
      </div>
  )
}

export default LandingPage
