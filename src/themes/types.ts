
// Color Scheme
interface Properties {
    BG_COLOR: string;
    SECONDARY_BG_COLOR?: string;
    TEXT_COLOR: string;
    SECONDARY_TEXT_COLOR?: string;
    BORDER_COLOR?: string;
    SHADOW_COLOR?: string;
};

type States = {
    normal: Properties;
} & Partial<Record<'active' | 'hover' | 'checked' | 'unchecked' | 'error', Properties>>;

export type AppColors = Record<'nav' | 'sidebar', States>;
export type ButtonColors = Record<'filled' | 'outlined', States>;
export type TextFieldColors = Record<'placeholder' | 'text', States>;

// Font-Size 
interface Props {
    MEDIUM_FONT?: string;
    LARGE_FONT?: string;
};

type State = {
    normal: Props;
};

export type FontSizes = Record<'medium' | 'large', State>;
interface Theme {
    app: AppColors;
    button: ButtonColors;
    textField: TextFieldColors;
    fontsize: FontSizes;
};

export type AppTheme = Record<'default', Theme>;

export default Theme;