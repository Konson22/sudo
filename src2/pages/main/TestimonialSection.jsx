import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AnimateTitle from "../../components/AnimateTitle";
import Carousel from 'react-elastic-carousel'


export default function TestimonialSection() {

    const items = [
        {
            id: 1, 
            title: 'Kon Akech',
            text:`If you're looking for a reliable and proficient software development company to bring your ideas to life, Sudo Agency`,
            image:process.env.PUBLIC_URL+'/images/Image-7.png'
        },
        {
            id: 2, 
            title: 'Lemi Ladu',
            text:`If you're looking for a reliable and proficient software development company to bring your ideas to life, Sudo Agency`,
            image:process.env.PUBLIC_URL+'/images/Image-12.png'
        },
        {
            id: 3, 
            title: 'Irine John',
            text:`If you're looking for a reliable and proficient software development company to bring your ideas to life, Sudo Agency`,
            image:process.env.PUBLIC_URL+'/images/Image-22.png'
        },
    ]

  return (
    <div className="px-[8%] py-[4rem]">
        <div className="flex justify-center">
            <AnimateTitle
                cName="md:text-5xl text-3xl font-bold text-center text-darkblue mb-5" 
                text='What people say about us' 
                bg='bg-gold'
            />
        </div>
        <div className="">
            <Carousel  itemsToShow={2} itemPadding={[6]} showArrows={false}>
                {items.map(item => (
                    <div key={item.id} className='flex bg-white p-5'>
                        <div className="h-[150px] w-[150px] rounded-full overflow-hidden border-4 border-gold">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="flex-1 ml-4">
                            <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                            <p>{item.text}</p>
                            <div className="flex mt-3">
                                <span className="text-xl text-white bg-gold rounded p-1">
                                    <FaFacebook />
                                </span>
                                <span className="text-xl text-white bg-gold rounded p-1 mx-3">
                                    <FaTwitter />
                                </span>
                                <span className="text-xl text-white bg-gold rounded p-1">
                                    <FaInstagram />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
  )
}
