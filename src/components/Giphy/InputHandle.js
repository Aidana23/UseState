import React from 'react';

const InputHandle = ({values, type, handleAllValue, name}) => {
    return (
        <div>
            <input type={type} 
                onChange={handleAllValue(name)}
                values={values}
            />
        </div>
    );
};

export default InputHandle;