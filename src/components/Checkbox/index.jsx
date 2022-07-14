import React from 'react';
// import './checkboxStyle.css';

const Checkbox = ({ id, label, propsCheckbox }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} {...propsCheckbox} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Checkbox;
