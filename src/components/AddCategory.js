import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmite = (e) => {
        e.preventDefault();
        inputValue.trim().length > 2 &&
            setCategories((categories) => [inputValue, ...categories]);
        //>> callback (categories) con el estado inicial y luego el nuevo
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmite}>
            <input
                type='text'
                value={inputValue}
                placeholder='Search a category'
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
