import { useState } from 'react'
import yxLogo from '../assets/yx-Logo.svg'

const NavBar = () => {

    const [navShow, setNavShow] = useState(false);

    const showNav = () => {
        setNavShow(!navShow)
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
                <i className="fa-solid fa-bars text-2xl sm:hidden" onClick={showNav}></i>
                {
                    navShow &&
                    <div className='flex items-center flex-col gap-7 absolute top-12 right-2 sm:hidden'>
                        <a href="#experience">EXPERIENCE</a>
                        <a href="#education">EDUCATION</a>
                        <a href="#projects">PROJECTS</a>
                    </div>
                }
            </div>
        </nav>
    )
}

export default NavBar