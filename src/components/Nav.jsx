import { headerLogo } from '../assets/images/' 
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
import { Button } from './Button'
const Nav = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
          src={ headerLogo }
          alt="Logo"
          width={130}
          height={29}
          />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}> 
              <a 
                href={item.href}
                className='font-montserrat leading-normal text-lg font-semibold text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img 
            className="hidden max-lg:block cursor-pointer" 
            src={hamburger} 
            height={25}
            width={25}
            alt="Hamburger"
            onClick={() => {
              setisMenuOpen(!isMenuOpen)
            }}
          />
        </div>
      </nav>
      <div className={`absolute bg-white-400 z-20 lg:hidden h-[50vh] w-full flex flex-col items-center justify-start font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
      >
        <ul className='flex flex-1 flex-col justify-center items-center gap-5 lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} onClick={() => (
              setisMenuOpen(false)
            )}> 
              <a
                href={item.href}
                className='font-montserrat leading-normal text-3xl text-slate-800'
              >
                <Button label={item.label} width="w-[60vw]"/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Nav