import portrait from '../assets/portrait.png'
const Intro = () => {
    let introArr = ["Hey there!", "Nice to meet you!", "My name is Yousae", "I'm a student at the University of Wisconsin-Eau Claire", "I'm studying Computer Science and Information Systems", "I'm interested in software engineering", "Thanks for visiting"]

    return (
        <div className="flex justify-center items-center sm:flex-row flex-col min-h-screen gap-5 sm:gap-12">
            <img src={portrait} alt="" className="sm:w-52 w-48 rounded-full"/>
            <div className="flex justify-center items-center flex-col gap-y-5 text-center">
                <h1 className="text-8xl">Yousae Xiong</h1>
                <p className="text-2xl">{introArr[0]}</p>
            </div>
        </div>
    )
}

export default Intro