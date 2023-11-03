const Footer = () => {
    return (
        <footer className="flex justify-center items-center flex-col pt-10 pb-2 gap-1">
            <div className="flex justify-center items-center gap-5">
                <a className="" href="https://www.linkedin.com/in/yousaexiong/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-xl"></i></a>
                <a className="" href="https://github.com/YouX24" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github text-xl"></i></a>
                <a className="" href="mailto:x.yousae@gmail.com"><i className="fa-solid fa-envelope text-xl"></i></a>
            </div>
            <div>
                <p className="text-xs text-gray-500">Coded by Yousae Xiong 2023</p>
            </div>
        </footer>
    )
}

export default Footer