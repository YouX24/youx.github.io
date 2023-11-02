import optumLogo from '../assets/optum-logo.svg'

const ExperienceCard = () => {

    return (
        <div className="flex gap-5 sm:w-[650px]">
            <img src={optumLogo} alt="company" className='h-12 w-12'/>
            <div>
                <h2 className="text-2xl mb-1">Optum</h2>
                <h4>Software Engineer Intern | June 2023 - August 2023</h4>
                <ul className="list-[circle] list-inside pl-4 text-sm sm:text-base ps-0 mt-2">
                    <li>Reduced manual labor and optimized workflow efficiency by developing a full-stack file validation application to automate file validation and duplicate checks.</li>
                    <li>Seamlessly detect errors in files consisting of over 1600 values, by implementing an efficient algorithm to parse extensive files to find errors.</li>
                    <li>Elevated backend API code quality, achieving over 84% code coverage and minimizing production issues through writing comprehensive unit tests.</li>
                    <li>Streamlined the deployment cycle, reduced deployment time, and fostered faster iterations and collaborative teamwork, by implementing CI pipeline with GitHub Actions.</li>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard