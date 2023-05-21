import React from "react";
import ProjectItem from "../components/ProjectItem";
import {ProjectList} from "../helpers/ProjectList";
import {motion} from "framer-motion";

import "../styles/Projects.css";

function Projects() {
    return (
        <motion.div
            className={"projects"}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x: window.innerWidth, transition: {duration:0.3}}}
        >
            <h1> My Personal Projects</h1>
            <div className={"projectList"}>
                {ProjectList.map((project, idx) => {
                    return (
                    <ProjectItem id={idx} name={project.name} image={project.image} />
                    );
                })}
            </div>
        </motion.div>
    );
}

export default Projects;