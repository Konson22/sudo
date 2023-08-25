import { FiCheck } from "react-icons/fi"


export default function IndustryWeServeSection() {
  return (
    <div className="ppx-[8%] md:my-[4rem] my-[2rem] flex md:bg-gold">
        <div className="md:block hidden w-[40%]">
            <img src={process.env.PUBLIC_URL+'/images/pexels-christina-morillo-1181244.jpg'} alt="" />
        </div>
        <div className="flex-1 md:py-10">
            <div className="bg-darkblue text-white w-[100%] md:px-10 px-4 py-10 md:ml-[-10%]">
                <h2 className="md:text-5xl text-3xl font-bold text-gold mb-4">Industries We Serve</h2>
                <h2 className="md:text-xl font-boldd">Our expertise spans across various industries, including but not limited to:</h2>
                <div className="grid grid-cols-2 gap-4 mt-7">
                    {data.map(d => (
                        <div className="flex items-center md:mb-4 mb-2">
                            <span className="text-gold border border-gold md:text-xl rounded-full p-2 mr-3">
                                <FiCheck />
                            </span>
                            <p>{d}</p>
                        </div>
                    ))}
                </div>
            </div>
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
