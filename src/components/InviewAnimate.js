/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export default function InviewAnimate({ children, visible={ opacity:1, y:0 }, hidden={ opacity:0, y:100 } }) {
    const ref = useRef(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isView = useInView(ref, { once:false});
    const mainControlls = useAnimation();
  
    useEffect(() => {
      if(isView){
        mainControlls.start('visible')
      }
    }, [isView]);

  return (
    <div ref={ref}>
        <motion.div
            variants={{
                hidden:hidden,
                visible:visible
            }}
            initial='hidden'
            animate={mainControlls}
            transition={{ duration:.5, delay:.25, ease:'easeInOut'}}
        >
            {children}
        </motion.div>
    </div>
  )
}
