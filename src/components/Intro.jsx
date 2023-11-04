import portrait from '../assets/portrait.png'
import Typewriter from 'typewriter-effect';

const Intro = () => {
    let introArr = ["Hey there!", "Nice to meet you!", "My name is Yousae.", "I'm a student at UW-Eau Claire.", "I'm studying Computer Science and Information Systems.", "I'm interested in software engineering.", "Thanks for visiting!"]

    return (
        <div className="flex justify-center items-center sm:flex-row flex-col min-h-screen gap-5 sm:gap-12 px-6 py-12 sm:px-12">
            <img src={portrait} alt="" className="sm:w-52 w-48 rounded-full"/>
            <div className="flex justify-center items-center flex-col gap-y-5 text-center">
                <h1 className="text-8xl">Yousae Xiong</h1>
                <div className='flex gap-5'>
                    <a className="" href="https://www.linkedin.com/in/yousaexiong/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-2xl"></i></a>
                    <a className="" href="https://github.com/YouX24" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github text-2xl"></i></a>
                    <a className="" href="mailto:x.yousae@gmail.com"><i className="fa-solid fa-envelope text-2xl"></i></a>
                </div>
                <Typewriter
                    options={{
                        strings: introArr,
                        autoStart: true,
                        loop: true,
                        delay: 50,
                }}
                />
            </div>
        </div>
    )
}

export default Intro