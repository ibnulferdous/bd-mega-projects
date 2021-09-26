import React from 'react';
import './Addeditem.css';

const Addeditem = (props) => {
    console.log(props);
    const { image, name } = props.addedItem;
    return (
        <div className="item-body">
            <img src={image} alt={name} />
            <h5>{name}</h5>
        </div>
    );
};

export default Addeditem;