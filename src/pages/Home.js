import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import {motion} from "framer-motion";

function Home() {
    return (
        <motion.div
            className={"home"}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x: window.innerWidth, transition: {duration:0.3}}}
        >
            <div className={"about"}>
                <img className={"photo"} src={require("../assets/profile_photo.png")} alt={"profile"}/>
                <h2>Hi, my name is Karina</h2>
                <div className={"prompt"}>
                    <p>A Frontend Developer with passion for learning and creating {""}
                        <button onClick={() => window.open(require("../assets/CV.pdf"), "_blank")}>
                            Download CV
                        </button></p>
                    <LinkedInIcon onClick={() => window.location.href = "https://www.linkedin.com/in/karina-svanstroem/"}/>
                    <GitHubIcon onClick={() => window.location.href = "https://github.com/KarinSV"}/>
                </div>
            </div>
            <div className={"skills"}>
                <h1>Skills</h1>
                <ol className={"list"}>
                    <li className={"item"}>
                        <h2>Frontend</h2>
                        <span>
                            ReactJS, HTML, CSS, NPM, MaterialUI, Yarn, Figma
                        </span>
                    </li>
                    <li className={"item"}>
                        <h2>Backend</h2>
                        <span>
                            NodeJS, ExpressJS, MongoDB
                        </span>
                    </li>
                    <li className={"item"}>
                        <h2>Languages</h2>
                        <span>
                            JavaScript, TypeScript
                        </span>
                    </li>
                </ol>
            </div>
        </motion.div>
    );
}

export default Home;