import { FiCheck } from "react-icons/fi"



export default function WhyUsSection() {
  return (
    <div className="why-us-container md:flex text-white md:pr-32 md:px-0 px-5 md:pt-0 pt-10">
      <div className="why-us-sidebar md:flex items-center md:text-6xl text-3xl font-bold text-white md:w-[40%]">
        <h2>Why Choose Us?</h2>
      </div>
      <div className="md:flex-1 flex flex-col justify-center  text-white md:ml-[-5%] md:py-12 py-">
        <div className="md:bg-gold shadow-md rounded-xl md:px-8 py-8 ">
          {data.map(d => (
            <div className="flex md:items-center mb-6">
              <div className="h-[max-content] md:text-2xl text- rounded-full border-2 border-white bg-darkblue p-2 m-">
                <FiCheck />
              </div>
              <div className="flex-1 md:ml-4 ml-2">
                <h4 className="text-xl font-semibold mb-">{d.title}</h4>
                <p className="">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


const data = [
  {
    title:'Creativity with Purpose',
    text:`Our designs are not just visually appealing; they serve a purpose. We ensure that each element contributes to the overall message and goals of your project.`
  },
  {
    title:'Attention to Detail',
    text:`We believe that the smallest details can make a significant difference. Our meticulous approach ensures that nothing is overlooked, and every pixel is in its rightful place.`
  },
  {
    title:'Timely Delivery',
    text:`We understand the importance of meeting deadlines. Our team works efficiently to deliver projects on time without compromising on quality.`
  },
  {
    title:'Continuous Support',
    text:`Our relationship with our clients doesn't end upon project completion. We provide ongoing support and assistance to ensure the seamless functioning of your digital assets.`
  },
]

