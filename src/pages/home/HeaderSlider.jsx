import image from '../../assets/images/gadgets-g08068e9d5_1280.jpg'
import image2 from '../../assets/images/money-gcbbbadce1_1280.jpg'
import image3 from '../../assets/images/pexels-lukas-574073.jpg'
import image4 from '../../assets/images/pexels-mateusz-dach-450035.jpg'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';


const sliderImages = [ image, image2, image3, image4 ];

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
            // opacity:0
        }
    }
}


const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

    const handleNextSlide = () => {
        setDirection(1)
        setCurrentSlide((prevSlide) => (prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setDirection(-1)
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1));
    };

    // setInterval(() => handleNextSlide(), 3000)


 
  return (
    <div className="h-[60vh] relative">
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={currentSlide}
                // src={process.env.PUBLIC_URL+sliderImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="slider-image"
                variants={variants}
                animate='animate'
                initial='initial'
                exit='axit'
                transition={{ duration: 0.2 }}
                custom={direction}
            >
                
            </motion.div>
        </AnimatePresence>
      <div className="slider-controls absolute inset-0 flex items-center text-2xl text-white justify-between p-20">
        <button className='bg-black/70 p-2 h-[max-content] rounded-full' onClick={handlePrevSlide}>
            <FaChevronLeft />
        </button>
        <button className='bg-black/70 p-2 h-[max-content] rounded-full' onClick={handleNextSlide}>
            <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeaderSlider;
