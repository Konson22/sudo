import { Element } from 'react-scroll'
import { motion } from 'framer-motion'


const sliderText = [ 
    'Your Trusted Partner for Innovative Software Solutions!',
    'Empowering Your Digital Dreams Unleash the Power of the Web & Apps!',
    'Unleash the Power of the Web & Apps!',
    'Empowering Your Digital Dreams Unleash the Power of the Web & Apps!',
];


export default function Header2() {
   
    const textAnimate = {
        offscreen:{
            y:50,
            opacity:0
        },
        onscreen:{
            y:0,
            opacity:1,
            transition:{ 
                type:'spring',
                duration:1.5, 
            }
        }
    }

    const animateBg = {
        offscreen:{
            left:0
        },
        onscreen:{
            left:'100%',
            transition:{ 
                type:'spring',
                duration:1.5, 
                bounce:0.2, 
            }
        }
    }
    return (
        <Element id='home' name='home'>
            <div
                className="overflow-hidden flex items-center text-white md:py-[7rem] py-[5rem] md:px-[10%] px-3"
                style={{
                    backgroundImage:`linear-gradient(to top, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), 
                    url(${process.env.PUBLIC_URL+'./images/pexels-mateusz-dach-450035.jpg'})`,
                    backgroundSize:'cover',
                    backgroundPosition:'bottom'
                }}
                
            >
                <motion.div 
                    className="md:w-[70%]"
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    transition={{staggerChildren:.5}}
                >
                    <motion.h1 
                        className='relative w-[max-content] md:text-8xl text-5xl font-bold text-gold md:mb-4 mb-3'
                        variants={textAnimate}
                    >
                        <motion.div 
                            className="absolute h-full right-0 top-0 bottom-0 bg-darkblue"
                            variants={animateBg}
                        >
                        </motion.div>
                        Sudo Agency
                    </motion.h1>
                    <motion.h1 
                        className='relative md:text-5xl text-3xl ffont-bold text-white md:mb-4 mb-3'
                        variants={textAnimate}
                    >
                        <motion.div 
                            className="absolute h-full right-0 top-0 bg-darkblue"
                            variants={animateBg}
                        >
                        </motion.div>
                        {sliderText[0]}
                    </motion.h1>
                    <button className="bg-gold rounded md:text-xl px-7 py-2 mt-7">Get Started</button>
                </motion.div>
            </div>
        </Element>
    )
  }
  
  