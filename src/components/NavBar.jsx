import { useState } from 'react'
import yxLogo from '../assets/yx-Logo.svg'

const NavBar = () => {

    const [navShow, setNavShow] = useState(false);

    const showNav = () => {
        setNavShow(!navShow)
    }

    const hideNav = () => {
        setNavShow(false)
    }

    return (
        <nav className='flex p-2 justify-between w-full absolute'>
            <a href="" className='flex items-center gap-4'>
                <img src={yxLogo} alt="yx" className='w-8'/> YOUSAE XIONG
            </a>
            <div>
                <div className='sm:flex flex items-center gap-7 hidden sm:block'>
                    <a href="#experience">EXPERIENCE</a>
                    <a href="#education">EDUCATION</a>
                    <a href="#projects">PROJECTS</a>
                </div>
                <i className="fa-solid fa-bars text-2xl sm:hidden fixed top-2 right-2 z-20 cursor-pointer" onClick={showNav}></i>
                
                {/* small screen */}
                {
                    navShow &&
                    <div className='flex items-center flex-col gap-7 top-0 right-0 sm:hidden bg-red-500 w-52 h-screen fixed z-10'>
                        <a href="#experience" onClick={hideNav} className="mt-14">EXPERIENCE</a>
                        <a href="#education" onClick={hideNav}>EDUCATION</a>
                        <a href="#projects" onClick={hideNav}>PROJECTS</a>
                    </div>
                }
            </div>
        </nav>
    )
}

export default NavBar