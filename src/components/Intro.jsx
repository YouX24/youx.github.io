
const Intro = () => {
    let introArr = ["Hey there!", "Nice to meet you!", "My name is Yousae", "I'm a student at the University of Wisconsin-Eau Claire", "I'm studying Computer Science and Information Systems", "I'm interested in software engineering", "Thanks for visiting"]

    return (
        <div className="flex justify-center items-center flex-col min-h-screen">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="w-96"/>
            <div className="flex justify-center items-center flex-col gap-y-5">
                <h1 className="text-8xl">Yousae Xiong</h1>
                <p className="text-2xl">{introArr[0]}</p>
            </div>
        </div>
    )
}

export default Intro