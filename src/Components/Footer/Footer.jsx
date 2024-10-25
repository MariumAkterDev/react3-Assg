import React from 'react'

const Footer = () => {
  return (
    <footer className='h-40 text-2xl font-bold text-white bg-[#1E3E62] flex justify-between items-center'>
      <div className="container flex justify-between items-center">
        <div className="logo">
          <img src="images/logo.png" alt="" />
        </div>
        <div className='w-[240px] flex justify-between'>
        <input className='placeholder:italic placeholder:text-slate-400 w-[185px] h-8  outline-none border-none rounded-sm text-[#243642] font-light pl-2 pr-2 text-sm bg-[#ECDFCC]' placeholder="......@email.com" type="email"  />
        <button className='font-thin text-[16px] w-[50px] h-8 bg-[#FF6500] rounded-sm '>send</button>
        </div>
        <p className='text-[12px] w-[300px] font-thin'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, nulla. Culpa neque 
          maxime nemo corporis dolorem! Nemo ea quo enim?
        </p>
      </div>
    </footer>
  )
}

export default Footer