import { useState } from "react"
import logo from "../assets/logo.webp"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="border-b-2">
            <div className="max-w-7xl mx-auto flex justify-center items-center py-8">
                <div className="pl-2">
                    <a href="#">
                        <img src={logo} width={150} height={15} alt="VastuSpaze"/>
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl pr-2 focus: outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar