import js from "../SVG/icon-javscript.svg";
import ts from "../SVG/icon-typescript.svg";
import react from "../SVG/icon-react.svg";
import next from "../SVG/icon-next.svg";
import node from "../SVG/icon-nodejs.svg";
import express from "../SVG/icon-express.svg";
import nest from "../SVG/icon-nest.svg";
import socket from "../SVG/icon-socket.svg";
import postSQL from "../SVG/icon-postgresql.svg";
import mongo from "../SVG/icon-mongodb.svg";
import sass from "../SVG/icon-sass.svg";
import tail from "../SVG/icon-tailwindcss.svg";
import figma from "../SVG/icon-figma.svg";
import cypress from "../SVG/icon-cypress.svg";
import storybook from "../SVG/icon-storybook.svg";
import git from "../SVG/icon-git.svg";



const data = [
    {
        text: "JavaScript",
        icon :js,
    },
    {
        text: "Typescript",
        icon :ts,
    },
    {
        text: "React",
        icon :react,
    },
    {
        text: "Next.js",
        icon :next,
    },
    {
        text: "Node.js",
        icon :node,
    },
    {
        text: "Express.js",
        icon :express,
    },
    {
        text: "Nest.js",
        icon :nest,
    },
    {
        text: "Socket.io",
        icon :socket,
    },
    {
        text: "PostgreSQL",
        icon :postSQL,
    },
    {
        text: "MongoDB",
        icon :mongo,
    },
    {
        text: "Sass/Scss",
        icon :sass,
    },
    {
        text: "Tailwindcss",
        icon :tail,
    },
    {
        text: "Figma",
        icon :figma,
    },
    {
        text: "Cypress",
        icon :cypress,
    },
    {
        text: "Storybook",
        icon :storybook,
    },
    {
        text: "Git",
        icon :git,
    },
    
]




function Skills() {
    return (
        <div className=" flex justify-center items-center">
            <div className=" flex flex-col w-[1440px] gap-6 px-[96px] py-[80px] mx-auto">
                <div className="flex flex-col justify-center items-center">
                
                <p className="rounded-full bg-gray-200 flex justify-center px-2 py-2 ">Skills</p>
                <h1 className="py-8">The skills, tools and technologies I am really good at:</h1>
                </div>
                <div className="flex flex-wrap  gap-[86px] max-w-[1216px] justify-between">
                {
                    data.map((el) => {
                        return (
                            <div> 
                            <img className="w-[64px] h-[64px] mb-[8px]" src={el.icon}></img>
                            <p className=" flex justify-center">{el.text}</p>
                          </div> 
                        )
                    })
                }
                </div>
                
            </div>
        </div>


    )
}

export default Skills;