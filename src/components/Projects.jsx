import chowTimeIcon from '../assets/chowtime-icon.svg'
import wordleIcon from '../assets/wordle-clone-icon.svg'
import tldrNewsletterIcon from '../assets/tldr-newsletter-tts-icon.svg'
import sortingAlgoIcon from '../assets/sorting-algo-icon.svg'
import steadyAidIcon from '../assets/steady-aid-icon.svg'
import smartCityIcon from '../assets/smart-city-icon.svg'
import portfolio1Icon from '../assets/portfolio1-icon.svg'
import Card from "../components/Card"

const Projects = () => {

    const chowtimeDesc = "A user-friendly restaurant decision-making app that lets you create and share voting links for restaurant choices, making group dining decisions a breeze."
    const wordleCloneDesc = "An engaging word puzzle game that mirrors the beloved Wordle game, challenging players to guess a hidden word with limited attempts in a fun and addictive way."
    const tldrNewsletterDesc = "A handy tool that automatically extracts and converts the TLDR Newsletter from your Gmail into an accessible audio format, allowing you to conveniently listen the newsletter content on the go."
    const sortAlgoDesc = "An interactive tool that lets users explore the workings of five popular sorting algorithms through visual animations."
    const steadyAidDesc = "A collaborative platform uniting nonprofit organizations and individuals with a shared mission, for the purpose of donating and sharing goods."
    const smartCityDesc = "A guide to Eau Claire, offering visitors and residents a one-stop app for discovering city landmarks, staying updated on local news, and seamlessly connecting with job opportunities in the area."
    const portfolio1Desc = "Version 1 of my portfolio website, showcasing my work and achievements, providing a digital space for me to share my skills and accomplishments with others."

    const chowtimeTech = "React, Node/Express, Tailwind, Supabase"
    const wordleCloneTech = "React, Tailwind"
    const tldrNewsletterTech = "Python, Gmail API, Cloud Text-to-Speech API"
    const sortAlgoTech = "React"
    const steadyAidTech = "JavaScript, HTML, CSS, Node/Express, JWT, MongoDB"
    const smartCityTech = "JavaScript, HTML, CSS, Node/Express, JWT, MongoDB, NewsAPI, Google Maps API"
    const portfolio1Tech = "React"

    return (
        <div className="flex justify-center items-center min-h-screen px-6 py-12 sm:px-12">
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-4xl mb-10">PROJECTS</h2>
                <div className="flex justify-center items-center flex-wrap">
                    <Card projectIcon={chowTimeIcon} projectTitle="ChowTime" projectDescription={chowtimeDesc} projectTechstack={chowtimeTech} bgColor="bg-green-200"/>
                    <Card projectIcon={wordleIcon} projectTitle="Wordle Clone" projectDescription={wordleCloneDesc} projectTechstack={wordleCloneTech} bgColor="bg-zinc-300"/>
                    <Card projectIcon={tldrNewsletterIcon} projectTitle="TLDR Newsletter Text to Speech" projectDescription={tldrNewsletterDesc} projectTechstack={tldrNewsletterTech} bgColor="bg-amber-200"/>
                    <Card projectIcon={sortingAlgoIcon} projectTitle="Sorting Algorithm Visualizer" projectDescription={sortAlgoDesc} projectTechstack={sortAlgoTech} bgColor="bg-blue-200"/>
                    <Card projectIcon={steadyAidIcon} projectTitle="Steady Aid" projectDescription={steadyAidDesc} projectTechstack={steadyAidTech} bgColor="bg-red-200"/>
                    <Card projectIcon={smartCityIcon} projectTitle="Smart City" projectDescription={smartCityDesc} projectTechstack={smartCityTech} bgColor="bg-indigo-200"/>
                    <Card projectIcon={portfolio1Icon} projectTitle="Portfolio v1" projectDescription={portfolio1Desc} projectTechstack={portfolio1Tech} bgColor="bg-amber-100"/>
                </div>
            </div>
        </div>
    )
}

export default Projects