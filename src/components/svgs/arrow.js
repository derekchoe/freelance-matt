import React from "react";

function Arrow({ className, height = '9', width='27' }) {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 37 16'
        >
            <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                <g
                    fill="rgb(255,146,33)"
                    transform='translate(-1071 -1506)'
                >
                    <g transform='translate(332 1350)'>
                        <g transform='translate(644 152)'>
                            <g transform='translate(95 4)'>
                                <g>
                                    <rect
                                        width='36'
                                        height='2'
                                        x='0'
                                        y='7'
                                        rx='1'
                                    ></rect>
                                    <rect
                                        width='10'
                                        height='2'
                                        x='27'
                                        y='4'
                                        rx='1'
                                        transform='rotate(45 32 5)'
                                    ></rect>
                                    <rect
                                        width='10'
                                        height='2'
                                        x='27'
                                        y='10'
                                        rx='1'
                                        transform='rotate(-45 32 11)'
                                    ></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Arrow;
