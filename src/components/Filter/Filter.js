import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onFilter}) {
    return (
        <label>
            Find contacts by name
            <input type="text" value={value} onChange={onFilter}/>
        </label>
    )    
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func
}