


export default function WhyUsSection() {
  return (
    <div className="flex bg-darkgreen md:pr-32">
      <div className="md:block hidden w-[40%] bg-red-300">
        <img src={process.env.PUBLIC_URL+'./images/pexels-fauxels-31831652.jpg'} alt="" />
      </div>
      <div className="md:flex-1 flex flex-col justify-center md:text-gray-600 text-white md:ml-[-5%] md:py-12 py-">
        <div className="md:bg-white shadow-md rounded-xl md:px-8 py-8 px-4">
          <h2 className="text-4xl mb-4 font-bold ">Why Choose Us?</h2>
          {data.map(d => (
            <div className="mb-4">
              <h4 className="text-xl ffont-semibold mb-3">{d.title}</h4>
              <p className="">{d.text}</p>
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

