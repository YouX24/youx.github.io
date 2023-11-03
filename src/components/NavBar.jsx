import yxLogo from '../assets/yx-Logo.svg'

const NavBar = () => {
    return (
        <nav className='flex p-2 justify-between w-full absolute'>
            <a href="" className='flex items-center gap-4'>
                <img src={yxLogo} alt="yx" className='w-8'/> YOUSAE XIONG
            </a>
            <div className='flex items-center gap-7'>
                <a href="#experience">EXPERIENCE</a>
                <a href="#education">EDUCATION</a>
                <a href="#projects">PROJECTS</a>
            </div>
        </nav>
    )
}

export default NavBar