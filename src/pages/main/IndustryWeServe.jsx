import { FiCheck } from "react-icons/fi"


export default function IndustryWeServe() {
    
  return (
    <div className="md:flex my-[2rem]">
      <div className="bg-darkblue text-white px-[8%] py-[3rem]">
        <h2 className="md:text-4xl text-2xl font-bold text-gold mb-8">Industries We Serve</h2>
        {data.map(industry => (
          <div className="flex items-center mb-4">
            <span className="border-2 border-gold bg-darkblue text-white md:text-2xl text-xl rounded-full p-2 mr-3">
              <FiCheck />
            </span>
            <p className="text-xl">{industry}</p>
          </div>
        ))}
      </div>
      <div className="md:flex-1 pl-[4%] md:pr-[8%] md:bg-gold md:text-white py-[3rem]">
        <h2 className="md:text-4xl text-3xl font-bold text- mb-8">Why Choose Us</h2>
        {whyUs.map((service, index) => (
          <div className="mb-5" key={index}>
            <h1 className="md:text-2xl font-bold mb-1">{service.title}</h1>
            <p>{service.text}</p>
          </div>
        ))}
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
    'Logistics and Supply Chain',
]

const whyUs = [
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