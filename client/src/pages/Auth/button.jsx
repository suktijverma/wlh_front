import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <div >
            {/* <button className="btn">{props.type}</button> */}
            <button className="btn">{props.type}</button>
        </div>
    )
};

export default Button;