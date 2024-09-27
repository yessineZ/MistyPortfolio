import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
    const [isOpen,setIsOpen] =useState(false) ; 
    const NavItems = () => {
        return (
            <ul className="nav-ul">
            {navLinks.map((item,index) => (
                <li key={index} className={`nav-li`}>
                    <a href={item.href} className="nav-li_a" onClick={() => {}}>
                        {item.name}
                    </a>
                </li>
            ) )}
            </ul>
        )
    }
    
    const toggleMenu = () => setIsOpen((prevState) => !prevState);
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 ">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto" aria-label="Toggle menu">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Misty
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
                        <img alt="toggle" className="w-6 h-6" src={`${isOpen ? '/assets/close.png' : '/assets/menu.png' }`} />
                    </button> 
                 <nav className="sm:flex hidden">
                    <NavItems/>
                 </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen ' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems/>
                </nav>

            </div>
        </div>
    )
}
export default Navbar;
