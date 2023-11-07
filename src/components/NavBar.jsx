import { useState } from 'react'
import yxLogo from '../assets/yx-logo.svg'

const NavBar = () => {

    const [navShow, setNavShow] = useState(false);

    const navShowMenuStyle = 'fa-solid fa-bars text-2xl sm:hidden fixed top-2 right-2 z-20 cursor-pointer hover:text-[#990000]'
    const navHideMenuStyle = 'fa-solid fa-x text-2xl sm:hidden fixed top-2 right-2 z-20 cursor-pointer text-white hover:text-[#FFD700]'

    const navHideStyle = 'flex items-center flex-col gap-7 top-0 right-[-14rem] sm:hidden bg-[#003366] w-52 h-screen fixed z-10 transition-all'
    const navShowStyle = 'flex items-center flex-col gap-7 top-0 right-0 sm:hidden bg-[#003366] w-[14rem] h-screen fixed z-10 transition-all'

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
                    <a href="#experience" className="hover:text-[#990000]">EXPERIENCE</a>
                    <a href="#education" className="hover:text-[#990000]">EDUCATION</a>
                    <a href="#projects" className="hover:text-[#990000]">PROJECTS</a>
                </div>
                <i className={navShow ? navHideMenuStyle : navShowMenuStyle} onClick={showNav}></i>
                
                {/* small screen */}
                <div className={navShow ? navShowStyle : navHideStyle} id="mobile-nav">
                    <a href="#experience" onClick={hideNav} className="mt-14"><p className="text-white hover:text-[#FFD700]">EXPERIENCE</p></a>
                    <a href="#education" onClick={hideNav}><p className="text-white hover:text-[#FFD700]">EDUCATION</p></a>
                    <a href="#projects" onClick={hideNav}><p className="text-white hover:text-[#FFD700]">PROJECTS</p></a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar