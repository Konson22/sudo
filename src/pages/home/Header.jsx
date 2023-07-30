// import Svg from "../../components/Svg";

export default function Header() {
    return (
        <div
            className="relative flex items-center text-white md:h-[80vh] md:py-0 py-16 px-[8%]"
            style={{
                backgroundImage:`linear-gradient(to top, rgba(255,255,255, 0.01) 5%, rgba(0,0,0, 0.01)), 
                url(${process.env.PUBLIC_URL+'./images/gadgets-g08068e9d5_1280.jpg'})`,
                backgroundSize:'cover',
                backgroundPosition:'bottom'
            }}
        >
            <div className="text-white md:w-[70%]">
                <h1 className="md:text-6xl text-3xl font-bold mb-3">
                    Empowering Your Digital Dreams Unleash the Power of the Web & Apps!
                </h1>
                {/* <h1 className="md:text-4xl text-2xl md:font-bold ">
                    Unleash the Power of the Web & Apps!
                </h1> */}
                <div className="flex mt-6">
                    <a href='#form' className="bg-red-700 rounded md:text-xl md:px-5 md:py-3 px-3 py-2">
                        Get a Quotation
                    </a>
                </div>
            </div>
            {/* <Svg /> */}
        </div>
    )
  }
  
  