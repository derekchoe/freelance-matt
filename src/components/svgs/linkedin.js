import React from "react";

function LinkedIn({ className="", darkMode }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='13'
            viewBox='0 0 18 18'
            className={className}
        >
            <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                <g fill={darkMode ? "#C9CBD0" : "#5E5E6B"} transform='translate(-872 -36)'>
                    <g>
                        <path d='M885.558 41.57c2.539 0 4.442 1.736 4.442 5.466V54h-3.858v-6.498c0-1.632-.558-2.746-1.955-2.746-1.066 0-1.7.751-1.98 1.476-.102.26-.127.622-.127.985V54h-3.858s.05-11.005 0-12.145h3.858v1.72c.512-.827 1.43-2.005 3.478-2.005zm-9.472.285V54h-3.858V41.855h3.858zM874.183 36c1.32 0 2.132.907 2.157 2.098 0 1.166-.837 2.099-2.183 2.099h-.024c-1.296 0-2.133-.933-2.133-2.1 0-1.19.863-2.097 2.183-2.097z'></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default LinkedIn;
