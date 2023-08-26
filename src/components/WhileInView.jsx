import { motion } from 'framer-motion'


export default function WhileInView({ children }) {

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
                duration:1, 
                // delay:.3
                // bounce:0.2, 
            }
        }
    }

  return (
    <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        variants={textAnimate}
        viewport={{ once:true, amount:.3 }}
    >
        {children}
    </motion.div>
  )
}
