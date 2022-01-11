import { AppColors } from '../../types';

const colors: AppColors = {
	nav: {
		normal: {
			BG_COLOR: 'transparent',
			TEXT_COLOR: '#25396F',
			SECONDARY_TEXT_COLOR: '#435EBE',
		},
		active: {
			BG_COLOR: '#435EBE',
			TEXT_COLOR: '#FFFFFF',
		},
	},
	header: {
		normal: {
			BG_COLOR: '#435EBE',
			SECONDARY_BG_COLOR: '#5371dd',
			TEXT_COLOR: '#FFFFFF',
		},
	},
	sidebar: {
		normal: {
			BG_COLOR: '#FFFFFF',
			TEXT_COLOR: '#788FE0',
			SECONDARY_TEXT_COLOR: '#8197E6',
		},
		hover: {
			TEXT_COLOR: '#FFFFFF',
			BG_COLOR: '#788FE0',
		},
	},
	brand: {
		normal: {
			BG_COLOR: '#435EBE',
			SECONDARY_BG_COLOR: '#41BBDD',
			TEXT_COLOR: '#41BBDD',
		},
	},
	content: {
		normal: {
			TEXT_COLOR: '#25396F',
			BG_COLOR: '#F2F7FF',
			SECONDARY_BG_COLOR: '#FFFFFF',
		},
	},
};

export default colors;
