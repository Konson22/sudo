import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';


const sliderText = [ 
    'Empowering Your Digital Dreams Unleash the Power of the Web & Apps!',
    'Unleash the Power of the Web & Apps!',
    'Empowering Your Digital Dreams Unleash the Power of the Web & Apps!',
 ];

const variants = {
    initial:dir => {
        return{
            x:dir > 0 ? '100%' : '-100%',
            opacity:0
        }
    },
    animate:{
        x:0,
        opacity:1
    },
    exit: dir => {
        return{
            x:dir > 0 ? '-100%' : '100%',
            opacity:0
        }
    }
}

export default function Header2() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNextSlide = () => {
        setDirection(1)
        setCurrentSlide((prevSlide) => (prevSlide === sliderText.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setDirection(-1)
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderText.length - 1 : prevSlide - 1));
    };
    
    return (
        <div
            className="relative overflow-hidden flex items-center text-white md:h-[80vh] h-[50vh] px-[10%]"
            style={{
                backgroundImage:`linear-gradient(to top, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), 
                url(${process.env.PUBLIC_URL+'./images/pexels-mateusz-dach-450035.jpg'})`,
                backgroundSize:'cover',
                backgroundPosition:'bottom'
            }}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentSlide}
                    alt={`Slide ${currentSlide + 1}`}
                    className="md:w-[70%] w-full"
                    variants={variants}
                    animate='animate'
                    initial='initial'
                    exit='axit'
                    // transition={{ duration: .6, ease:'easeInOut' }}
                    custom={direction}
                >
                <h1 className="md:text-6xl text-2xl font-bold">{sliderText[currentSlide]}</h1>
                <button className="bg-gold rounded text-xl px-5 py-3 mt-5">Get a Quotation</button>
            </motion.div>
            <div className="absolute inset-0 flex items-center md:text-2xl text-xl text-white justify-between md:p-10">
                <button className='md:bg-black/20 p-2 h-[max-content] rounded-full' onClick={handlePrevSlide}>
                    <FaChevronLeft />
                </button>
                <button className='md:bg-black/10 p-2 h-[max-content] rounded-full' onClick={handleNextSlide}>
                    <FiChevronRight />
                </button>
            </div>
        </AnimatePresence>
        </div>
    )
  }
  
  