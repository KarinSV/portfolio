import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import {motion} from "framer-motion";

function Experience() {
    return (
        <motion.div
            className={"experience"}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x: window.innerWidth, transition: {duration:0.3}}}
        >
            <VerticalTimeline lineColor={"#3e497a"}>
                <VerticalTimelineElement
                    className={"vertical-timeline-element--education"}
                    date={"2021"}
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    icon={<SchoolIcon />}
                >
                    <h3 className={"vertical-timeline-element-title"}>
                        Hermods,Stockholm, Sweden
                    </h3>
                    <h4 className={"vertical-timeline-element-subtitle"}>Komvux</h4>
                    <p>Web Development</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={"vertical-timeline-element--education"}
                    date={"2022-2024"}
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    icon={<SchoolIcon />}
                >
                    <h3 className={"vertical-timeline-element-title"}>
                        Hyper Island, Stockholm, Sweden
                    </h3>
                    <h4 className={"vertical-timeline-element-subtitle"}>Higher Vocational Education</h4>
                    <p>Frontend Developer</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </motion.div>
    );
};

export default Experience;