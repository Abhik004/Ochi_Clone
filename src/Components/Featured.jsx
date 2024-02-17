import React, {useState} from 'react';
import {motion, useAnimate, useAnimation} from "framer-motion";
import {Power4} from "gsap/gsap-core";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
const Feature = () => {
    const all = [useAnimation(), useAnimation()]
    const handleHover = (index) => {
        all[index].start({y: "0"});
    }
    const handleHoverEnd= (index) => {
        all[index].start({y: "100%"});
    }

    return (<div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-800 pb-20'>
            <h1 className="text-7xl font-[Neue_Montreal] tracking-tight">Featured Projects</h1>
        </div>
        <div className="px-20">
            <div className="cards w-full flex gap-10">

                <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)}
                            className="cardcontainer  relative w-1/2 h-[60vh] bg-zinc-100 ">
                    <h1 className=" absolute  flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] font-['Founders_Grotesk_X-Condensed'] tracking-tighter text-6xl">
                        {"FYDE".split('').map((item, index) => <motion.span initial={{y: "100%"}} animate={all[0]} transition={{ease:[0.22,1,.36,1],delay:index*.01}}
                                                                            className="inline-block ">{item}</motion.span>)}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
            <div className=' card w-full h-full  overflow-hidden rounded-xl bg-green-400 '><img className='w-full h-full bg-cover' src={project1}/></div>
            <div className='butn flex gap-3 ' >
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[140px] border-2  rounded-full mt-2  h-[40px]  text-zinc-200 '  >BRANDIDENTITY</button>
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[140px] rounded-full mt-2  h-[40px]   border-2  '  >DESIGNRESEARCH </button>
<button  className='hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[140px] rounded-full mt-2  h-[40px] border-2   '  >INVESTORDECK </button>

</div>
            </div>

                </motion.div>
                <motion.div className="cardcontainer  relative w-1/2 h-[60vh] " onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)}>
                    <div className=" card w-full h-full    rounded-xl overflow-hidden ">
                        <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68]   font-['Founders_Grotesk_X-Condensed'] tracking-tighter text-6xl">{"VISE".split('').map((item, index) =>
                            <motion.span initial={{y: "100%"}} animate={all[1]}
                                         transition={{ease: [0.22, 1, .36, 1], delay: index * .01}}
                                         className="inline-block ">{item}</motion.span>)}</h1>
                        <img className='w-full h-full bg-cover' src={project2}/>
                    </div>
                </motion.div>
            </div>
        </div>

    </div>);
};

export default Feature;