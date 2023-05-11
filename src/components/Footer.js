import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className={"footer"}>
            <div className={"socialMedia"}>
                <LinkedInIcon onClick={() => window.location.href = "https://www.linkedin.com/in/karina-svanstroem/"}/>
                <GitHubIcon onClick={() => window.location.href = "https://github.com/KarinSV"}/>
            </div>
            <p> &copy; 2023 Karina Svanström </p>
        </div>
    );
};

export default Footer;