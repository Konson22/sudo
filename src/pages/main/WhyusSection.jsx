import AnimateTitle from "../../components/AnimateTitle"


export default function WhyusSection() {
  return (
    <div className="md:px-[8%] px-6 md:py-[4rem] py-[1rem] flex">
      <div className="flex-1">
        <AnimateTitle 
          cName="md:text-5xl text-3xl font-bold text-center text-darkblue" 
          text='WHY CHOOSE US' 
          bg='bg-gold'
        />
      
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-7 mt-4">
          {data.map(d => (
            <div className="bg-white p-6">
              <h3 className="text-2xl mb-2">{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-[40%] md:block hidden">
        <img src={process.env.PUBLIC_URL+'/images/pexels-luis-gomes-546819.jpg'} alt="" />
      </div> */}
    </div>
    // <div className="md:px-[8%] px-4 md:py-[4rem] py-[1rem]">
    //   <div className="flex items-center mb-14">
    //     <div className="md:h-2 h-1 bg-gradient-to-r from-gold to-darkgray flex-1"></div>
    //     <h2 className="md:text-5xl text-3xl font-bold text-center text-darkblue mx-5">WHY CHOOSE US</h2>
    //     <div className="md:h-2 h-1 bg-gradient-to-r to-gold from-darkgray flex-1"></div>
    //   </div>
      
    // </div>
  )
}

const data = [
  {
    title:'Expert Team',
    text:'Our team comprises highly skilled and experienced professionals who are proficient in the latest technologies and methodologies. We keep ourselves updated with industry trends to provide you with the best possible solutions.'
  },
  {
    title:'Custom Solutions',
    text:'We understand that every business is different, and so are their requirements. Our approach involves close collaboration with you to understand your specific needs and create custom software solutions that perfectly align with your goals.'
  },
  {
    title:'Cutting-edge Technology',
    text:'Embracing technology is at the core of our company. We harness the power of the latest tools and frameworks to build robust and scalable applications that withstand the test of time.'
  },
  {
    title:'Agile Development',
    text:'We follow the Agile development methodology, ensuring flexibility and transparency throughout the project lifecycle. Regular updates, feedback sessions, and incremental deliveries keep you in the loop and let you have control over the development process.'
  },
]