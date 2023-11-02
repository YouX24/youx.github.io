import ExperienceCard from "./ExperienceCard"

const Experience = () => {
    return (
        <div className="flex justify-center min-h-screen px-6 py-12 sm:px-12">
            <div className="flex items-center flex-col">
                <h2 className="text-4xl mb-10">EXPERIENCE</h2>
                <div className="flex justify-center items-center">
                    <ExperienceCard/>
                </div>
            </div>
        </div>
    )
}

export default Experience