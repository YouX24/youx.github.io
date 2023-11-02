/* eslint-disable react/prop-types */
const Card = (props) => {
    const cardStyle = `w-[350px] h-[350px] m-[3%] ${props.bgColor} rounded-md relative group`
    return (
        <div className={cardStyle}>
            <img className="absolute" src={props.projectIcon} alt="project visual" />
            <div className="flex justify-center items-center flex-col absolute w-full h-full text-center bg-white transition-opacity ease-in-out duration-1000 opacity-0 group-hover:opacity-90 hover:opacity-90">
                <h2 className="mb-1">{props.projectTitle}</h2>
                <p className="sm:text-base text-sm">{props.projectDescription}
                <br/>
                <br/>
                <i className="sm:text-base text-sm">{props.projectTechstack}</i>
                </p>
                <br/>
                <div className="flex gap-5">
                    {props.projectLink != undefined &&
                        <a href={props.projectLink} target="_blank" rel="noopener noreferrer" className="text-2xl">
                            <button><i className="fa-solid fa-window-maximize"></i></button>
                        </a>
                    }
                    {
                        props.githubLink != undefined &&
                        <a href={props.githubLink} target="_blank" rel="noopener noreferrer" className="text-2xl">
                            <button><i className="fa-brands fa-github"></i></button>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card