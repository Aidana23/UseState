import React from 'react';
import InputHandle from './InputHandle';

const Form = ({value, handleAllValue, searchGiphy}) => {
    return (
        <form onSubmit={searchGiphy}>
            <InputHandle
                type="text"
                values = {value.title}
                handleAllValue = {handleAllValue}
                name = 'title'
            
            />
            <InputHandle
                type="number"
                values = {value.count}
                handleAllValue = {handleAllValue}
                name = 'count'
            
            />
            <button>
                Search
            </button>
        </form>
    );
};

export default Form;
