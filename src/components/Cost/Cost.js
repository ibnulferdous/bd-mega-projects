import React, { useEffect } from 'react';
import { useState } from 'react';

const Cost = (props) => {
    console.log(props);
    const [totalText, setTotalText] = useState("0 Million");
    
    let total = 0;

    for (const project of props.addedProjects) {
        total += project.cost
    }

    useEffect( () => {
        console.log(total);
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
        <div>
            <h2>Project(s) Selected: {props.addedProjects.length}</h2>
            <h3>Total Cost: ${totalText}</h3>
        </div>
    );
};

export default Cost;