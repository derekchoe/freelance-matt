import React from "react";

function Hamburger({darkMode}) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            enableBackground='new 0 0 32 32'
            version='1.1'
            viewBox='0 0 32 32'
            xmlSpace='preserve'
            fill={darkMode ? "#C9CBD0" : "#5E5E6B"}
        >
            <path d='M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z'></path>
        </svg>
    );
}

export default Hamburger;
