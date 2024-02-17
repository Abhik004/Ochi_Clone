import React, {useEffect, useState} from 'react';
const Iye = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);

        })
    }, []);
    return (
        <div className="eyes w-full h-screen overflow-hidden">
            <div data-scroll  data-scroll-speed="-0.7"
                className=" relative w-full h-full  bg-cover  bg-center bg-[#CDEA68]">
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                {["Ready","to start","the", "project?"].map((item,index)=>{
        return( <div className='masker'>
        {/* tracking tighter to bring letters closer... p-2 to check the margins */}
        <div className='w-fit flex pt-7'>
        <h1 className="uppercase font-semibold text-[10vw] text-zinc-900 leading-[5.5vw] tracking-tighter font-['Founders_Grotesk']">{item}</h1>
        </div>
        </div>
        );
        
    })}
    <div className="absolute pt-20 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center">
                        <button className="bg-zinc-900 text-white px-4 py-2 mr-3 rounded-full flex items-center h-10  hover:bg-black hover:border-white hover:border-2 font-['Founders_Grotesk'] font-semibold">
                        <div className='pr-4'>Start The Project</div>
                        <div className='w-2 h-2  bg-zinc-100  rounded-full'></div></button>
                        </div>
                </div>
                <div className="absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex">
                    <div data-scroll data-scroll-section data-scroll-speed=".2" className=' flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className=' relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}
                                 className="line w-full h-10  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] ">
                                <div className='  w-10 h-10 bg-zinc-100 rounded-full'>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div data-scroll data-scroll-section data-scroll-speed=".2" className=' flex items-center justify-center w-[15vw] h-[15vw]  bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}
                                 className="line w-full h-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] ">
                                <div className='  w-10 h-10 bg-zinc-100 rounded-full'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Iye;


{/* t-1/2 l-1/2 -translate-x-[50%] -translate-y-[50%] - to keep things in center.... */}