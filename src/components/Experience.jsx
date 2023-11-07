import optumLogo from '../assets/optum-logo.svg'
import uwecLogo from '../assets/uwec-logo.png'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <div className="flex justify-center min-h-screen px-6 py-12 sm:px-12 bg-slate-500" id="experience">
            <div className="flex items-center flex-col">
                <h2 className="text-4xl mb-10 text-white">EXPERIENCE</h2>
                <div className="flex justify-center items-center">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#DAAD86', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #DAAD86' }}
                            date="June 2023 - August 2023"
                            iconStyle={{ background: '#fff', color: '#fff' }}
                            icon={
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img src={optumLogo} alt="company" className="object-contain"/>
                                </div>}
                        >
                            <h3 className="vertical-timeline-element-title text-base sm:text-lg">Software Engineer Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm sm:text-base">Optum</h4>
                            <ul className="list-[circle] mt-5 ml-5 space-y-2 text-sm sm:text-base">
                                <li>Reduced manual labor and optimized workflow efficiency by developing a full-stack file validation application to automate file validation and duplicate checks.</li>
                                <li>Seamlessly detect errors in files consisting of over 1600 values, by implementing an efficient algorithm to parse extensive files to find errors.</li>
                                <li>Elevated backend API code quality, achieving over 84% code coverage and minimizing production issues through writing comprehensive unit tests.</li>
                                <li>Streamlined the deployment cycle, reduced deployment time, and fostered faster iterations and collaborative teamwork, by implementing CI pipeline with GitHub Actions.</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#DAAD86', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #DAAD86' }}
                            date="November 2020 - March 2021"
                            iconStyle={{ background: '#fff', color: '#fff' }}
                            icon={
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img src={uwecLogo} alt="company"/>
                                </div>}
                        >
                            <h3 className="vertical-timeline-element-title text-base sm:text-lg">Computer Science Administrator</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm sm:text-base">Univerity of Wisconsin-Eau Claire - Learning & Technology Services</h4>
                            <ul className="list-[circle] mt-5 ml-5 space-y-2 text-sm sm:text-base">
                                <li>Ensured seamless server access for students and faculty, by managing and updating University CentOS and web servers.</li>
                                <li>Facilitated problem-solving for both faculty and students, by providing timely software support.</li>
                                <li>Honed user support abilities and explored innovative technologies for potential integration in CS courses.</li>
                            </ul>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Experience