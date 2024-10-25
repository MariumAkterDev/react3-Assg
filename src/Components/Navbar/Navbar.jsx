import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-5 bg-[#FD8B51]'>
        <div className="container">
          <div className="menu_row flex justify-between">
            <div className="logo">
              <a href="/" className='text-[#1E3E62] text-3xl font-extrabold cursor-default'>Ipsum</a>
            </div>
            <div className="menu-item">
              <ul className='flex text-[#F2E5BF] text-xl font-bold'>
                <li ><a className='hover:bg-[#FF6500] p-2 transition duration-300 rounded-sm cursor-default' href="/"       >Home</a></li>
                <li ><a className='hover:bg-[#FF6500] p-2 transition duration-300 rounded-sm cursor-default' href="/about"  >About</a></li>
                <li ><a className='hover:bg-[#FF6500] p-2 transition duration-300 rounded-sm cursor-default' href="/blog"   >Blog</a></li>
                <li ><a className='hover:bg-[#FF6500] p-2 transition duration-300 rounded-sm cursor-default' href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="w-[135px] flex justify-between">
              <button className='bg-[#1E3E62] text-[#FEFAE0] w-16 rounded-sm hover:bg-[#243642] hover:text-[#FD8B51] outline-none border-none text-sm font-semibold transition-all'>SignUp</button>
              <button className='bg-[#1E3E62] text-[#FEFAE0] w-16 rounded-sm hover:bg-[#243642] hover:text-[#FD8B51] outline-none border-none text-sm font-semibold transition-all'>LogIn</button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar