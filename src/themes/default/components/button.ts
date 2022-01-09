import { ButtonColors } from "../../types";

const colors: ButtonColors = {
    filled: {
        normal: {
            BG_COLOR: '#3787FF',
            SECONDARY_BG_COLOR: '#41BBDD', //#42BA96 previous
            TEXT_COLOR: '#FFFFFF',
            BORDER_COLOR: '#6B8AF8'
        },
        hover: {
            BG_COLOR: '#5d9dff',
            SECONDARY_BG_COLOR: '#66C8E3',
            TEXT_COLOR: '#FFFFFF'
        },
        error: {
            TEXT_COLOR: '#FFFFFF',
            BG_COLOR: '#FF7976',
            SECONDARY_BG_COLOR: '#FF8683',
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
        },
        error: {
            TEXT_COLOR: '#FFFFFF',
            SECONDARY_TEXT_COLOR: '#FF7976',
            BG_COLOR: '#FF7976',
            SECONDARY_BG_COLOR: '#FF8683',
            BORDER_COLOR: '#FF7976',
        }
    }
};

export default colors;