import React from "react";

const SfSelect = ({ options, defValue, value, onChange }) => {
    
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value='by date'>{defValue}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};

export default SfSelect;
