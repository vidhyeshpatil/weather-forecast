import React from 'react';

// functional component
// destructure of props & return valid react element
const InputWrapper = ({ handleSubmit }) => {
    return (
        <div className = "header-wrapper">
            <form onSubmit = {handleSubmit}>
                <input className = "input" name = "inputCity" type = "text" placeholder = "Enter city name" />
                <button className = "btn-weather"> Check Weather </button>
            </form>
        </div>
    );
}

export default InputWrapper;
