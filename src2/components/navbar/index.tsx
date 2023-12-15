import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { navigationsLinksData } from "../../assets/staticData";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';


const variants = {
  initial:(state:boolean) => {
    return{
      x:state ? 0 : '-100%',
      opacity:0
    }
  },
  animate:(state:boolean) => {
    return{
      x:state ? 0 :'-100%',
      opacity:1
    }
  },
  exit:(state:boolean) => {
    return{
      x:'-100%',
      opacity:0
    }
  }
}

const variants2 = {
  initial:{
    y:'-100%',
    opacity:0
  },
  animate:{
    y:0,
    opacity:1
  },
  exit:{
    y:'-100%',
    opacity:0,
  }
}


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav 
      className="
        flex items-center justify-between bg-darkblue text-white md:px-[8%] px-3 md:py-0 py-3
        w-full sticky left-0 top-0 z-40 border-b-4 border-gold
      "
    >
      <div className="text-3xl">
        Sudo
      </div>
      <div className='md:flex hidden md:static fixed inset-0 md:bg-transparent bg-darkblue z-50'>
        <ul className="md:flex">
          {navigationsLinksData.map(link => (
            <NavLink className='block px-4 md:py-5 py-3' to={link.path}>{link.text}</NavLink>
          ))}
        </ul>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="">
        <span className="md:hidden block text-xl" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </span>
        <button className="md:block hidden bg-gold rounded px-5 py-2">Get Quotation</button>
      </div>
    </nav>
  )
}

interface mobileNavProps {
  isOpen:boolean,
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ isOpen, setIsOpen }:mobileNavProps) => {
  return(
    <AnimatePresence initial={false} custom={isOpen}>
      <motion.div 
        className={`
          md:hidden md:static fixed inset-0 md:bg-transparent bg-darkblue z-50 translate-x-[-100%
        `}
        variants={variants}
        animate='animate'
        initial='initial'
        exit='axit'
        custom={isOpen}
        transition={{ duration: 0.2 }}
      >
        <div className="md:hidden bg-gold/80 flex items-center justify-between p-4">
          <span className="text-2xl">Sudo Agency</span>
          <span className="border rounded-full text-xl p-1" onClick={() => setIsOpen(!isOpen)}>
            <FiX />
          </span>
        </div>
        <ul className="md:flex">
          {navigationsLinksData.map((link, index) => (
            <motion.div
              key={index}
              variants={variants2}
              animate={isOpen ? 'animate' : ''}
              initial='initial'
              exit='axit'
              transition={{ duration:.2, delay:.1+index/20 }}
            >
              <NavLink className='block px-4 md:py-5 py-3' to={link.path} onClick={() => setIsOpen(false)}>
                {link.text}
              </NavLink>
            </motion.div>
          ))}
        </ul>
        </motion.div>
    </AnimatePresence>
  )
}