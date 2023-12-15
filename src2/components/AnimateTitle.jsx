import { motion } from 'framer-motion'


export default function AnimateTitle({ text, cName, bg }) {

    const textAnimate = {
        offscreen:{
            y:50,
        },
        onscreen:{
            y:0,
            transition:{ 
                type:'spring',
                duration:1, 
                bounce:0.2, 
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
                duration:2, 
                bounce:0.2, 
            }
        }
    }

  return (
    <motion.h2
        className={`relative w-[max-content] ${cName}`}
        initial={'offscreen'}
        whileInView={'onscreen'}
        variants={textAnimate}
        viewport={{ amount:.5 }}
        transition={{ staggerChildren:.9, delay:2}}
    >
        <motion.div 
            className={`absolute h-full right-0 top-0 bottom-0 ${bg}`}
            variants={animateBg}
            viewport={{ amount:.5 }}
            transition={{ staggerChildren:.9, delay:2}}
        >
        </motion.div>
        {text}
    </motion.h2>
  )
}
