import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDisplay from "../pages/ProjectDisplay";
import Experience from "../pages/Experience";
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/project/:id"} element={<ProjectDisplay />} />
            <Route path={"/experience"} element={<Experience />} />
        </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;