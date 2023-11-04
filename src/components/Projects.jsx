import chowTimeIcon from '../assets/chowtime-icon.svg'
import wordleIcon from '../assets/wordle-clone-icon.svg'
import tldrNewsletterIcon from '../assets/tldr-newsletter-tts-icon.svg'
import sortingAlgoIcon from '../assets/sorting-algo-icon.svg'
import steadyAidIcon from '../assets/steady-aid-icon.svg'
import smartCityIcon from '../assets/smart-city-icon.svg'
import portfolio1Icon from '../assets/portfolio1-icon.svg'
import portfolio2Icon from '../assets/portfolio2-icon.svg'
import Card from "../components/Card"

const Projects = () => {

    const chowtimeDesc = "A user-friendly restaurant decision-making app that lets you create and share voting links for restaurant choices, making group dining decisions a breeze."
    const wordleCloneDesc = "An engaging word puzzle game that mirrors the beloved Wordle game, challenging players to guess a hidden word with limited attempts in a fun and addictive way."
    const tldrNewsletterDesc = "A handy tool that automatically extracts and converts the TLDR Newsletter from your Gmail into an accessible audio format, allowing you to conveniently listen the newsletter content on the go."
    const sortAlgoDesc = "An interactive tool that lets users explore the workings of five popular sorting algorithms through visual animations."
    const steadyAidDesc = "A collaborative platform uniting nonprofit organizations and individuals with a shared mission, for the purpose of donating and sharing goods."
    const smartCityDesc = "A guide to Eau Claire, offering visitors and residents a one-stop app for discovering city landmarks, staying updated on local news, and seamlessly connecting with job opportunities in the area."
    const portfolio1Desc = "Version 1 of my portfolio website, showcasing my work and achievements, providing a digital space for me to share my skills and accomplishments with others."
    const portfolio2Desc = "This current website!"


    const chowtimeTech = "React, Node/Express, Tailwind, Supabase"
    const wordleCloneTech = "React, Tailwind"
    const tldrNewsletterTech = "Python, Gmail API, Cloud Text-to-Speech API"
    const sortAlgoTech = "React"
    const steadyAidTech = "JavaScript, HTML, CSS, Node/Express, JWT, MongoDB"
    const smartCityTech = "JavaScript, HTML, CSS, Node/Express, JWT, MongoDB, NewsAPI, Google Maps API"
    const portfolio1Tech = "React"
    const portfolio2Tech = "React, Tailwind"

    const chowTimeProjectLink = "https://chowtime-v80l.onrender.com/"
    const wordleCloneProjectLink = "https://youx24.github.io/wordle-clone/"
    const sortingAlgoProjectLink = "https://youx24.github.io/Sorting-Algo-Visualizer/"
    const porfoliov1ProjectLink = "https://youx24.github.io/Portfolio/"

    const chowTimeGithubLink = "https://github.com/YouX24/chowtime"
    const wordleCloneGithubLink = "https://github.com/YouX24/wordle-clone"
    const sortingAlgoGithubLink = "https://github.com/YouX24/Sorting-Algo-Visualizer"
    const porfoliov1GithubLink = "https://github.com/YouX24/Portfolio"
    const tldrNewletterGithubLink = "https://github.com/YouX24/gmail_TLDR_newsletter_tts"
    const steadyAidGithubLink = "https://github.com/YouX24/SteadyAid"
    const smartCityGithubLink = "https://github.com/YouX24/Smart-City"
    const portfolio2GithubLink = "https://github.com/YouX24/youx.github.io"

    return (
        <div className="flex justify-center items-center min-h-screen px-6 py-12 sm:px-12" id="projects">
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-4xl mb-10">PROJECTS</h2>
                <div className="flex justify-center items-center flex-wrap">
                    <Card projectIcon={chowTimeIcon} projectTitle="ChowTime" projectDescription={chowtimeDesc} projectTechstack={chowtimeTech} projectLink={chowTimeProjectLink} githubLink={chowTimeGithubLink} bgColor="bg-green-200"/>
                    <Card projectIcon={wordleIcon} projectTitle="Wordle Clone" projectDescription={wordleCloneDesc} projectTechstack={wordleCloneTech} projectLink={wordleCloneProjectLink} githubLink={wordleCloneGithubLink} bgColor="bg-zinc-300"/>
                    <Card projectIcon={tldrNewsletterIcon} projectTitle="TLDR Newsletter Text to Speech" projectDescription={tldrNewsletterDesc} projectTechstack={tldrNewsletterTech} githubLink={tldrNewletterGithubLink} bgColor="bg-amber-200"/>
                    <Card projectIcon={sortingAlgoIcon} projectTitle="Sorting Algorithm Visualizer" projectDescription={sortAlgoDesc} projectTechstack={sortAlgoTech} projectLink={sortingAlgoProjectLink} githubLink={sortingAlgoGithubLink} bgColor="bg-blue-200"/>
                    <Card projectIcon={steadyAidIcon} projectTitle="Steady Aid" projectDescription={steadyAidDesc} projectTechstack={steadyAidTech} githubLink={steadyAidGithubLink} bgColor="bg-red-200"/>
                    <Card projectIcon={smartCityIcon} projectTitle="Smart City" projectDescription={smartCityDesc} projectTechstack={smartCityTech} githubLink={smartCityGithubLink} bgColor="bg-indigo-200"/>
                    <Card projectIcon={portfolio1Icon} projectTitle="Portfolio v1" projectDescription={portfolio1Desc} projectTechstack={portfolio1Tech} projectLink={porfoliov1ProjectLink} githubLink={porfoliov1GithubLink} bgColor="bg-gray-300"/>
                    <Card projectIcon={portfolio2Icon} projectTitle="Portfolio v2" projectDescription={portfolio2Desc} projectTechstack={portfolio2Tech} githubLink={portfolio2GithubLink} bgColor="bg-amber-100"/>
                </div>
            </div>
        </div>
    )
}

export default Projects