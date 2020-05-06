import React from "react";

function Light({ className =""}) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='17'
            height='17'
            viewBox='4 5 25 20'
            className={className}
        >
            <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                <g fill='#C9CBD0' transform='translate(-1009 -28)'>
                    <g transform='translate(1009 28)'>
                        <circle cx='15' cy='15' r='8'></circle>
                        <path d='M17 27H18V28H17z'></path>
                        <path d='M16 6H17V7H16z'></path>
                        <path d='M6 16H7V17H6z'></path>
                        <path d='M27 17H28V18H27z'></path>
                        <g transform='rotate(45 8.464 20.536)'>
                            <path
                                d='M12 22H13V23H12z'
                                transform='rotate(1 12.5 22.5)'
                            ></path>
                            <path
                                d='M11 1H12V2H11z'
                                transform='rotate(1 11.5 1.5)'
                            ></path>
                            <path
                                d='M1 11H2V12H1z'
                                transform='rotate(1 1.5 11.5)'
                            ></path>
                            <path
                                d='M22 12H23V13H22z'
                                transform='rotate(1 22.5 12.5)'
                            ></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Light;
