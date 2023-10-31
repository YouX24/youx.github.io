/* eslint-disable react/prop-types */
const Card = (props) => {
    const cardStyle = `w-[350px] h-[350px] m-[3%] ${props.bgColor} rounded-md relative group`
    return (
        <div className={cardStyle}>
            <img className="absolute" src={props.projectIcon} alt="" />
            <div className="flex justify-center items-center flex-col absolute w-full h-full text-center bg-white transition-opacity ease-in-out duration-1000 opacity-0 group-hover:opacity-90 hover:opacity-90">
                <h2>{props.projectTitle}</h2>
                <p>{props.projectDescription}
                <br/>
                <br/>
                <i>{props.projectTechstack}</i>
                </p>
            </div>
        </div>
    )
}

export default Card