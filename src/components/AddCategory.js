import React, { useState } from 'react';
import PropTypes from 'prop-types';


function AddCategory ({ setcategories }){

    const [inputValue, setInputValue] = useState('');

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setcategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

  return (
    <>
        <form onSubmit={ handleSubmit }>
            <input type="text" value={ inputValue } onChange= { handleInputChange }></input>
        </form>
    </>
  )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory;