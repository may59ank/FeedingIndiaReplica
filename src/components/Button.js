import React from 'react'
import { FaCaretRight } from 'react-icons/fa';
import './css/components.css';

const Button = ({title="Read More >"}) => {
    return (
        <div className="primaryButton">
            <a href="/">{title} <FaCaretRight /></a>
        </div>
    )
}

export default Button;

const ButtonSecond = ({title}) => {
    return (
        <div className="secondaryButton">
            <a href="/">{title} <FaCaretRight /></a>
        </div>
    )
}

export { ButtonSecond };
