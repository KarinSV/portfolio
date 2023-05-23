import React from "react";
import {useParams} from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import {motion} from "framer-motion";

function ProjectDisplay() {
    const {id} = useParams()
    const project = ProjectList[id]

    return (
        <motion.div
            className={project}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x: window.innerWidth, transition: {duration:0.3}}}
        >
            <h1>{project.name}</h1>
            <image src={project.image} />
            <a href={project.repo} target="_blank" rel="noreferrer">Source Code</a>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <a href="https://github.com/KarinSV" target="_blank" rel="noreferrer">
            <GitHubIcon/>
            </a>

        </motion.div>
    );
}

export default ProjectDisplay;