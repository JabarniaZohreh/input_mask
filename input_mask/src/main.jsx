/* eslint-disable react/prop-types */
// import React from 'react';

const Input = ({ handleChange, hint, value }) => {
  return (
    <div className="input">
      <label htmlFor="input">
        {hint}
      </label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={value}  
      />
    </div>
  );
};

export default Input;
