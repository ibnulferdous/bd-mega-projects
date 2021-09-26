import React from 'react';
import './Project.css';

const Project = (props) => {
    console.log(props)
    const { name, cost, category, image, start, deadline, status } = props.project;
    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="card-body">
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <p>Estimated Cost: ${cost} Million</p>
                <p>Project Started: {start}</p>
                <p>Deadline: {deadline}</p>
                <p>Project Status: {status}</p>
            </div>
        </div>
    );
};

export default Project;