import { FaQuoteLeft, FaStar } from "react-icons/fa";


export default function TestimonialSection() {
  return (
    <div className="md:px-[8%] px-3 py-[3rem]">
      <div className="text-4xl font-bold text-center">What Our Clients Say</div>
      <div className='md:grid grid-cols-3 gap-5 mt-16'>
            {[...new Array(3)].map(() => (
              <div className="bg-gray-100">
                <div className="flex items-center justify-between bg-gray-200 px-6 py-3">
                  <img 
                    className="h-12 w-12 border-4 border-white rounded-full mt-[-1.5rem]" 
                    src={process.env.PUBLIC_URL+'./images/Image-2.png'} 
                    alt="" 
                  />
                  <span className="ml-4">Kon Akech</span>
                  <div className="flex items-center">
                    <span className="text-">
                      <FaStar />
                    </span>
                    <span className="text-">
                      <FaStar />
                    </span>
                    <span className="text-">
                      <FaStar />
                    </span>
                    <span className="text-">
                      <FaStar />
                    </span>
                    <span className="text-">
                      <FaStar />
                    </span>
                  </div>
                </div>
                <div className="flex p-4">
                  <FaQuoteLeft />
                  <p className="flex-1">
                    Our team comprises experienced professionals who stay updated with the latest trends, technologies, and design principles, delivering top-notch solutions for your business.
                  </p>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}
