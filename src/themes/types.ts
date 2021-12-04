
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

export type ActionTypes = 'edit' | 'delete' | 'approve' | 'reject';

export type AppColors = Record<'nav' | 'header' | 'sidebar' | 'brand' | 'content', States>;
export type ButtonColors = Record<'filled' | 'outlined', States>;
export type ActionButtonColors = Record<ActionTypes, States>;
export type TextFieldColors = Record<'placeholder' | 'text', States>;
export type ProfileColors = Record<'placeholder' | 'label' | 'background', States>;
export type MenuItemColors = Record<'text', States>;
export type CardColors = Record<'primary' | 'secondary', States>;
export type IconColors = Record<'primary' | 'secondary', States>;

interface Theme {
    app: AppColors;
    actionButton: ActionButtonColors;
    button: ButtonColors;
    textField: TextFieldColors;
    profile: ProfileColors;
    menuItem: MenuItemColors;
    card: CardColors;
    icon: IconColors;
};

export type AppTheme = Record<'default', Theme>;

export default Theme;