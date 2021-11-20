

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

interface Theme {
    app: AppColors;
}

export type AppTheme = Record<'default', Theme>;

export default Theme;