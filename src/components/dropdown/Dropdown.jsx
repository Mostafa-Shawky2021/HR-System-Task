import React from 'react'
import './dropdown.css'
const Dropdown = ({ requiredDropdown, options, getSelectedOption }) => {

    const onSelectedOption = (event) => {
        if (event.currentTarget != event.target) {
            getSelectedOption(requiredDropdown, event.target.getAttribute('value'))

        }
    }
    return (
        <ul className="option-list list-unstyled" onClick={(e) => onSelectedOption(e)}>
            {
                options.map((option, index) => (
                    <li key={index} className="option-item" value={option}>{option}</li>
                ))
            }
        </ul>
    )
}

export default Dropdown