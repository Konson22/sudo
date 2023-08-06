

export default function WhyChooseUsSection() {
  return (
    <div className="why-us-containerr flex bg-gold text-whitee">
      <div className="flex-1 md:px-[8%] px-4 text-white">
        <h2 className="text-4xl font-bold text-gold mb-3">Why Choose Us</h2>
        {data.map(service => (
          <div className="mb-5">
            <h1 className="md:text-2xl md:font-semibold mb-1">{service.title}</h1>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
      <div className="md:block hidden w-[40%]">
        <img src={process.env.PUBLIC_URL+'./images/pexels-mateusz-dach-450035.jpg'} alt="" />
      </div>
    </div>
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