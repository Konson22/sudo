import { motion } from 'framer-motion'


export default function AnimateTitle({ text, cName }) {

    const textAnimate = {
        offscreen:{
            y:50,
            scale:.5,
            opacity:0
        },
        onscreen:{
            y:0,
            scale:1,
            opacity:1,
            transition:{ 
                type:'spring',
                duration:1, 
                bounce:0.2, 
            }
        }
    }

  return (
    <motion.h2
        className={cName}
        initial={'offscreen'}
        whileInView={'onscreen'}
        variants={textAnimate}
        viewport={{ amount:.5 }}
    >
        {text}
    </motion.h2>
  )
}
