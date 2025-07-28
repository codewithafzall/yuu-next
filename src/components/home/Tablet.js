import React from 'react'

const Tablet = () => {
  return (
    <div className='absolute -bottom-4 w-[65%] py-10 px-10 rounded-full bg-[#f7f4ed] flex justify-between items-center
    max-[768px]:w-[90%] max-[768px]:py-3 max-[768px]:px-4 max-[768px]:bottom-7'>
<button className='text-2xl text-[#595959] mx-auto flex max-[768px]:text-base'>Request Callback</button>
<div className='w-[2px] h-12 bg-[#d16f52] max-[768px]:h-8'></div>
<button className='text-2xl text-[#595959] mx-auto flex max-[768px]:text-base'>Schedule Visit</button>
<div className='w-[2px] h-12 bg-[#d16f52] max-[768px]:h-8'></div>
<button className='text-2xl text-[#595959] mx-auto flex max-[768px]:text-base'>Brochure</button>
</div>
  )
}

export default Tablet