import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
    <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            <button className='absolute px-5 py-1 rounded-full border-[#c2e166]  border-2 left-10 bottom-10 text-[#c2e166]'>&copy; 2019-2022</button>
        </div>
    </div>
    <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
    <div className='card relative rounded-xl w-1/2 h-full bg-[#275e56] flex items-center justify-center'>
  <img class="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
  <button class="absolute px-1.5 py-1 rounded-full border-2 left-5 bottom-5 transition-all hover:bg-white hover:text-[#0e2a26]">
    RATING 5.O ON CLUTCH
  </button>
</div>
<div class="card relative rounded-xl w-1/2 h-full bg-[#275e56] flex items-center justify-center">
  <img class="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
  <button class="absolute px-2.5 py-1 rounded-full border-2 left-1 bottom-2 transition-all hover:bg-white hover:text-[#0e2a26]">
    BUSINESS BOOTCAMP ALUMNI
  </button>
</div>

    </div>
    </div>
  )
}

export default Cards
