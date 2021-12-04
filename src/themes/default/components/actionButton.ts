import { ActionButtonColors } from "../../types";

const colors: ActionButtonColors = {
    edit: {
        normal: {
            BG_COLOR: '#57CAEB',
            TEXT_COLOR: '#FFFFFF',
        },
        hover: {
            BG_COLOR: '#5d9dff',
            TEXT_COLOR: '#FFFFFF'
        },
        error: {
            TEXT_COLOR: '#FFFFFF',
            BG_COLOR: '#FF7976',
        }
    },
    delete: {
        normal: {
            BG_COLOR: '#FF7976',
            TEXT_COLOR: '#FFFFFF',
        },
        hover: {
            BG_COLOR: '#FF7976',
            TEXT_COLOR: '#FFFFFF'
        }
    },
    approve: {
        normal: {
            BG_COLOR: '#51DBB2',
            TEXT_COLOR: '#FFFFFF',
        },
        hover: {
            BG_COLOR: '#54C0A0',
            TEXT_COLOR: '#FFFFFF'
        }
    },
    reject: {
        normal: {
            BG_COLOR: '#FF7976',
            TEXT_COLOR: '#FFFFFF',
        },
        hover: {
            BG_COLOR: '#FF7976',
            TEXT_COLOR: '#FFFFFF'
        }
    }
};

export default colors;