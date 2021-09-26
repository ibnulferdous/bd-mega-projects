import React, { useEffect } from 'react';
import { useState } from 'react';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('./mega-projects.JSON')
            .then(res => res.json())
            .then(data => setProjects(data))
    },[]);

    return (
        <div className="projects-container">
            <div className="cards-container">
                {
                    projects.map(project => <Project key={project.key} project={project}></Project>)
                }
            </div>
            <div className="cost-container">
                <h2>Projects Selected: 0</h2>
            </div>
        </div>
    );
};

export default Projects;