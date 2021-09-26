import React, { useEffect } from 'react';
import { useState } from 'react';
import Cost from '../Cost/Cost';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [addedProjects, setAddedProjects] = useState([]);

    useEffect( () => {
        fetch('./mega-projects.JSON')
            .then(res => res.json())
            .then(data => setProjects(data))
    },[]);

    const handleAddToList = (project) => {
        if (addedProjects.findIndex(addedProject => addedProject.key === project.key) === -1) {
            const newAddedList = [...addedProjects, project]
            setAddedProjects(newAddedList)
        }        
    };

    return (
        <div className="projects-container">
            <div className="cards-container">
                {
                    projects.map(project => <Project 
                        key={project.key} 
                        project={project}
                        handleAddToList={handleAddToList}
                    ></Project>)
                }
            </div>
            <div className="cost-container">
                <Cost addedProjects={addedProjects}></Cost>
            </div>
        </div>
    );
};

export default Projects;