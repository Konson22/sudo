import { FiCheck } from "react-icons/fi"
import { motion } from 'framer-motion'
import AnimateTitle from "../../components/AnimateTitle"


export default function IndustryWeServeSection() {

    const textAnimate = {
        offscreen:{
            x:-200,
            opacity:0
        },
        onscreen:{
            x:0,
            opacity:1,
            transition:{ 
                type:'spring',
                duration:1, 
            }
        }
    }
  return (
    <div className="ppx-[8%] md:my-[4rem] my-[2rem] flex md:bg-gold">
        <div className="md:block hidden w-[40%]">
            <img src={process.env.PUBLIC_URL+'/images/pexels-christina-morillo-1181244.jpg'} alt="" />
        </div>
        <div className="flex-1 md:py-10">
            <motion.div className="bg-darkblue text-white w-[100%] md:px-10 px-4 py-10 md:ml-[-10%]"
                initial={'offscreen'}
                whileInView={'onscreen'}
                variants={textAnimate}
                viewport={{ once:true, amount:.3 }}
            >
                <AnimateTitle 
                    cName="md:text-5xl text-3xl font-bold text-center text-gold" 
                    text='Industries We Serve' 
                    bg='bg-white'
                />
                {/* <h2 className="md:text-5xl text-3xl font-bold text-gold mb-4">Industries We Serve</h2> */}
                <h2 className="md:text-xl font-boldd">Our expertise spans across various industries, including but not limited to:</h2>
                <motion.div 
                    className="grid grid-cols-2 gap-4 mt-7"
                    variants={textAnimate}
                    transition={{ staggerChildren:2.5, delay:2.5}}
                >
                    {data.map(d => (
                        <motion.div 
                            className="flex items-center md:mb-4 mb-2"
                            variants={textAnimate}
                        >
                            <motion.span className="bg-gold border border-white md:text-xl rounded-full p-2 mr-3">
                                <FiCheck />
                            </motion.span>
                            <motion.p>{d}</motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

const data = [
    'E-commerce and Retail',
    'Healthcare and Life Sciences',
    'Finance and Banking',
    'Education and E-Learning',
    'Real Estate',
    'Travel and Hospitality',
    'Manufacturing',
    'Logistics and Supply Chain'
]
