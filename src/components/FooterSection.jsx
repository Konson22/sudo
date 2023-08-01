import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";


export default function FooterSection() {
  return (
    <footer className="bg-darkblue text-gray-300">
        <div className="md:flex md:px-[10%] px-5 md:pt-10 pt-5">
            <div className="flex-1">
                <h2 className="text-3xl text-white font-bold mb-4">Sudo Agency</h2>
                <p>
                    Let Sudo Agency be your trusted partner in elevating your digital presence and creating memorable experiences for your audience. Get in touch with us today to discuss your next design project and let's embark on a journey of innovation together!
                </p>
            </div>
            <div className="md:mx-32 md:my-0 my-10">
                <h3 className="text-xl text-white font-bold mb-3">Services</h3>
                <ul>
                    <li className="my-3">
                    Support our work
                    </li>
                    <li className="my-3">
                    Become a member
                    </li>
                    <li className="my-3">
                    Volunteer with us
                    </li>
                    <li className="my-3">
                    Support our work
                    </li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-xl text-white font-bold mb-2">Contacts</h3>
                <ul>
                    <li className="flex items-center my-3">
                    <span className="h-8 w-8 flex items-center justify-center border rounded-full mr-2">
                        <FaMapMarkerAlt />
                    </span>
                    Stem center next to SSBC
                    </li>
                    <li className="flex items-center my-3">
                    <span className="h-8 w-8 flex items-center justify-center border rounded-full mr-2">
                        <FiPhoneCall />
                    </span>
                    +211920079070
                    </li>
                    <li className="flex items-center my-3">
                    <span className="h-8 w-8 flex items-center justify-center border rounded-full mr-2">
                        <FaWhatsapp />
                    </span>
                    +211920079070
                    </li>
                    <li className="flex items-center my-3">
                    <span className="h-8 w-8 flex items-center justify-center border rounded-full mr-2">
                        <FiMail />
                    </span>
                    +211920079070
                    </li>
                </ul>
            </div>
        </div>
        <div className="md:px-[10%] px-5 md:flex justify-between md:bg-darkblue/20 md:py-6">
            <div className="flex justify-evenly md:py-0 py-6">
                <span className="text-\xl border rounded-full p-2">
                    <FaTwitter />
                </span>
                <span className="text-\xl border rounded-full p-2 md:mx-8">
                    <FaInstagram />
                </span>
                <span className="text-\xl border rounded-full p-2">
                    <FaFacebook />
                </span>
                <span className="text-\xl border rounded-full p-2 md:mx-8">
                    <FaLinkedin />
                </span>
            </div>
            <div className="flex justify-evenly md:border-none border-y md:py-0 py-4">
                <span className="">Policy</span>
                <span className="md:mx-4">Privacy</span>
                <span className="">Policy</span>
            </div>
            <div className="text-center md:text-sm text-[12px] md:py-0 py-4">
                &copy; Copyright reserved for Sudo Agency 2023
            </div>
        </div>
    </footer>
  )
}
