import { useState } from "react"
import logo from "../assets/logo.webp"  
import { LINKS, type navLinks } from "../constants"
import { RiCloseLine, RiMenu3Line } from "@remixicon/react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="border-b-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
                <div className="pl-2">
                    <a href="#">
                        <img src={logo} width={150} height={15} alt="VastuSpaze"/>
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl pr-2 focus: outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>
                <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                    {LINKS.map((link: navLinks, index: number) => (
                        <a key={index} href={link.link} className="uppercase text-sm font-medium">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar