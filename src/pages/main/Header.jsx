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
            y:100,
            opacity:0
        },
        onscreen:{
            y:0,
            opacity:1,
            transition:{ 
                type:'spring',
                duration:2, 
                delay:.5
                // bounce:0.2, 
            }
        }
    }
    return (
        <Element id='home' name='home'>
            <div
                className="relative overflow-hidden flex items-center text-white md:py-[7rem] py-[5rem] md:px-[10%] px-3"
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
                    transition={{staggerChildren:.5, delay:.4}}
                >
                    <motion.h1 
                        className="md:text-8xl text-5xl font-bold text-gold md:mb-4 mb-3"
                        variants={textAnimate}
                    >
                        Sudo Agency
                    </motion.h1>
                    <motion.h2 
                        className="md:text-5xl text-xl md:font-bold"
                        variants={textAnimate}
                    >
                        {sliderText[0]}
                    </motion.h2>
                    <button className="bg-gold rounded md:text-xl px-7 py-2 mt-7">Get Started</button>
                </motion.div>
            </div>
        </Element>
    )
  }
  
  