import React from 'react';
import Ochi from '../assets/Ochi.png'
const Footer = () => {
    return (
        <div className=" flex gap-2 0 w-full h-screen p-20 ">
            <div className="w-1/2 h-full flex flex-col justify-between font-['Founders_Grotesk_X-Condensed']">
                <div className="heading">
                    <h1 className="text-7xl uppercase  leading-none"> Eye- </h1>
                    <h1 className="text-7xl uppercase  leading-none"> Opening </h1>
                    <div>
                    <a href='#'><img className='w-20 h-13 pt-80 bg-cover' src={Ochi}/></a></div>
                </div>
            </div>
            <div className="w-1/2">
                <h1 className="text-7xl uppercase  leading-none -mb-10">Presentations</h1>

            <div className='dets font-["Neue_Montreal"] mt-20'>
                  <a className='block text-xl font-light' href="#">Facebook</a>
                  <a className='block text-xl font-light' href="#">Instagram</a>
                  <a className='block text-xl font-light' href="#">Twitter</a>
                </div>
                </div>
        </div>
        
    );
};

export default Footer;