import { css } from "@emotion/core";

export const darkModeColor = {
           background: "#22222b",
           header: "#f7f8fd",
           grey: "#C9CBD0",
           border: "#2b2b37",
           tag: "rgb(255,146,33)",
           widgetTag: "#22222b",
           widgetBack: "#2b2b37",
           boxShadow: "#1e1e23",
           selected: "#22222b",
           list: "#eaeaef",
       };

export const lightModeColor = {
           background: "rgb(247,248,253)",
           header: "rgb(34,34,43)",
           grey: "#5E5E6B",
           border: "#ebecf5",
           tag: "#5e5e6b",
           widgetTag: "#ebecf5",
           widgetBack: "#f7f8fd",
           boxShadow: "rgba(64, 61, 64, 0.84)",
           selected: "#ebecf5",
           list: "#22222b",
       };

export const variables = {
    radius: {
        rounded: "4px",
        oval: "18px",
    },
    fontSize: {
        tiny: "10px", // 8px
        small: "12px", // 12px
        medium: "14px", // 14px
        base: "16px", // 16px
        large: "24px", // 24px
        huge: "36px", // 36px
    },
    fontWeight: {
        bold: "800",
        semiBold: "500",
    },
    font: {
        base: `Montserrat`,
        header: "'Roboto Slab', serif",
    },
    media: {
        desktop: "1200px",
        medium: "1005px",
        tablet: "768px",
        mobile: "576px",
        tiny: "340px",
    },
    spacing: {
        smallest: "3px",
        tiny: "8px",
        small: "12px",
        medium: "24px",
        large: "36px",
        huge: "48px",
    },
    zIndex:{
        modal: 10000
    },
    maxWidth: {
        mobile: '300px',
        desktop: '550px',
    },
    helpers: {
        flexCenter: css`
            display: flex;
            justify-content: center;
            align-items: center;
        `,
    },
};

export const stripHashCharacter = (hex) =>
    hex && hex.charAt(0) === "#" ? hex.substr(1) : hex;
