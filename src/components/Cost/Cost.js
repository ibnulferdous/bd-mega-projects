import React, { useEffect } from 'react';
import { useState } from 'react';
import Addeditem from '../Addeditem/Addeditem';
import './Cost.css';

const Cost = (props) => {
    const [totalText, setTotalText] = useState("0 Million");
    
    let total = 0;

    for (const project of props.addedProjects) {
        total += project.cost
    }

    useEffect( () => {
        if(total >= 1000) {
            const billionConverted = total / 1000;
            const newText = billionConverted.toFixed(2) + " Billion";
            setTotalText(newText)
        } else {
            const newText = total + " Million";
            setTotalText(newText)
        }
    }, [total]);


    return (
        <div className="cost-body">
            <h2 className="uppercase">Project(s) Selected: {props.addedProjects.length}</h2>
            <h3>Total Cost: ${totalText}</h3>
            {
                props.addedProjects.map(addedItem => <Addeditem key={addedItem.key} addedItem={addedItem}></Addeditem>)
            }
        </div>
    );
};

export default Cost;