// Color Scheme
interface Properties {
	BG_COLOR: string;
	SECONDARY_BG_COLOR?: string;
	TEXT_COLOR: string;
	SECONDARY_TEXT_COLOR?: string;
	BORDER_COLOR?: string;
	SHADOW_COLOR?: string;
}

type States = {
	normal: Properties;
} & Partial<Record<'active' | 'hover' | 'checked' | 'unchecked' | 'error' | 'disabled', Properties>>;

export type ActionTypes = 'edit' | 'delete' | 'approve' | 'reject';

export type AppColors = Record<'nav' | 'header' | 'sidebar' | 'brand' | 'content', States>;
export type GameButtonColors = Record<'start' | 'cleared' | 'locked', States>;
export type ActionButtonColors = Record<ActionTypes, States> & GameButtonColors;
export type ButtonColors = Record<'filled' | 'outlined', States>;
export type DialogColors = Record<'header' | 'body', States>;
export type TextFieldColors = Record<'placeholder' | 'text', States>;
export type ProfileColors = Record<'placeholder' | 'label' | 'background', States>;
export type MenuItemColors = Record<'text', States>;
export type CardColors = Record<'primary' | 'secondary', States>;
export type IconColors = Record<'primary' | 'secondary', States>;
export type NavigatorColors = Record<'page' | 'nav', States>;

interface Theme {
	app: AppColors;
	actionButton: ActionButtonColors;
	button: ButtonColors;
	card: CardColors;
	dialog: DialogColors;
	icon: IconColors;
	menuItem: MenuItemColors;
	navigator: NavigatorColors;
	profile: ProfileColors;
	textField: TextFieldColors;
}

export type AppTheme = Record<'default', Theme>;

export default Theme;
