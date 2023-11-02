import uwecLogo from '../assets/uwec-logo.png'
import Courses from './Courses'

const Education = () => {
    return (
        <div className="flex justify-center min-h-screen bg-slate-600 px-6 py-12 sm:px-12">
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-4xl text-white mb-10">EDUCATION</h2>
                <div className="flex justify-center items-center">
                    <img src={uwecLogo} alt="University of Wisconsin-Eau Claire logo" className="sm:h-14 md:h-24 h-10"/>
                    <div className="text-white">
                        <p className="sm:text-2xl m-2">University of Wisconsin-Eau Claire</p>
                        <p className="sm:text-xl text-sm m-2">B.S. - Computer Science, Information Systems Minor</p>
                        <p className="sm:text-sm  text-xs m-2">Expected Graduation - December 2023</p>
                    </div>
                </div>
                <Courses/>
            </div>
        </div>
    )
}

export default Education