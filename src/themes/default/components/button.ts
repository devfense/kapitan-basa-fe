import { ButtonColors } from "../../types";

const colors: ButtonColors = {
    filled: {
        normal: {
            BG_COLOR: '#3787FF',
            TEXT_COLOR: '#FFFFFF',
            BORDER_COLOR: '#6B8AF8'
        },
        hover: {
            BG_COLOR: '#4B93FF',
            TEXT_COLOR: '#FFFFFF'
        },
        error: {
            TEXT_COLOR: '#FFFFFF',
            BG_COLOR: '#FF7976',
        }
    },
    outlined: {
        normal: {
            BG_COLOR: 'transparent',
            BORDER_COLOR: '#6B8AF8',
            TEXT_COLOR: '#6B8AF8',
        },
        hover: {
            BG_COLOR: '#6B8AF8',
            TEXT_COLOR: '#FFFFFF'
        }
    }
};

export default colors;