import React from 'react';

const Button = (props) => {
    return (
        <>
        <button
            onClick={props.action} 
            disabled = {props.disabledButton}     
        >
            {props.name}
        </button>
            
        </>
    );
};

export default Button;