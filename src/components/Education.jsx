import uwecLogo from '../assets/uwec-logo.png'
import Courses from './Courses'

const Education = () => {
    return (
        <div className="flex justify-center min-h-screen bg-slate-500 p-[50px]">
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-4xl mb-10">EDUCATION</h2>
                <div className="flex justify-center items-center">
                    <img src={uwecLogo} alt="" className="h-24"/>
                    <div>
                        <p className="text-2xl m-2">University of Wisconsin-Eau Claire</p>
                        <p className="text-xl m-2">B.S. - Computer Science, Information Systems Minor</p>
                        <p className="text-sm m-2">Expected Graduation - December 2023</p>
                    </div>
                </div>
                <Courses/>
            </div>
        </div>
    )
}

export default Education