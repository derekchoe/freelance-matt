import React from "react";

function Email({ className = "", darkMode=false}) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='13'
            viewBox='0 -1 18 18'
            className={className}
        >
            <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                <g
                    fill={darkMode ? "#C9CBD0" : "#5E5E6B"}
                    transform='translate(-962 -37)'
                >
                    <g>
                        <path d='M973 44.307c-1.788 0-11-4.85-11-4.85V38.7c0-.938.82-1.7 1.833-1.7h18.333c1.014 0 1.834.762 1.834 1.7l-.015.85s-9.111 4.757-10.985 4.757zm0 2.338c1.96 0 10.985-4.545 10.985-4.545L984 52.3c0 .938-.82 1.7-1.834 1.7h-18.333c-1.012 0-1.833-.762-1.833-1.7l.015-10.2c-.001 0 9.197 4.545 10.985 4.545z'></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Email;
