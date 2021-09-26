import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Project = (props) => {
    const { name, cost, category, image, start, deadline, status } = props.project;
    const element = <FontAwesomeIcon icon={faPlusCircle} />

    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="card-body">
                <h3 className="uppercase">{name}</h3>
                <p>Category: {category}</p>
                <p>Estimated Cost: ${cost} Million</p>
                <p>Project Started: {start}</p>
                <p>Deadline: {deadline}</p>
                <p>Project Status: {status}</p>
                <button 
                    className="card-button uppercase"
                    onClick={() => props.handleAddToList(props.project)}
                ><span>{element}</span> Add to List</button>
            </div>
        </div>
    );
};

export default Project;