import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { navigationsLinksData } from "../../assets/staticData";

export default function Navbar() {
  return (
    <nav 
      className="
        flex items-center justify-between bg-rose-600 text-white md:px-[8%] px-3 md:py-0 py-3
        w-full sticky left-0 top-0 z-40
      "
    >
      <div className="text-3xl">
        Sudo
      </div>
      <div className="md:flex hidden">
        <ul className="flex">
          {navigationsLinksData.map(link => (
            <NavLink className='px-4 py-5' to={link.path}>{link.text}</NavLink>
          ))}
        </ul>
      </div>
      <div className="">
        <span className="md:hidden block text-xl">
          <FaBars />
        </span>
        <button className="md:block hidden bg-white text-red-700 rounded px-5 py-2">Get Quotation</button>
      </div>
    </nav>
  )
}
