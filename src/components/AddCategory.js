import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setcategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log('aqui para las pruebas');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    if (inputValue.trim().length > 2) {
      setcategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>mundo</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired
}


export default AddCategory;