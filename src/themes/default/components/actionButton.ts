import { ActionButtonColors } from '../../types';

const colors: ActionButtonColors = {
	edit: {
		normal: {
			BG_COLOR: '#57CAEB',
			TEXT_COLOR: '#FFFFFF',
		},
		hover: {
			BG_COLOR: '#5D9DFF',
			TEXT_COLOR: '#FFFFFF',
		},
		error: {
			TEXT_COLOR: '#FFFFFF',
			BG_COLOR: '#FF7976',
		},
	},
	delete: {
		normal: {
			BG_COLOR: '#FF7976',
			TEXT_COLOR: '#FFFFFF',
		},
		hover: {
			BG_COLOR: '#FF7976',
			TEXT_COLOR: '#FFFFFF',
		},
	},
	approve: {
		normal: {
			BG_COLOR: '#51DBB2',
			TEXT_COLOR: '#FFFFFF',
		},
		hover: {
			BG_COLOR: '#54C0A0',
			TEXT_COLOR: '#FFFFFF',
		},
	},
	reject: {
		normal: {
			BG_COLOR: '#FF7976',
			TEXT_COLOR: '#FFFFFF',
		},
		hover: {
			BG_COLOR: '#FF7976',
			TEXT_COLOR: '#FFFFFF',
		},
	},
	start: {
		normal: {
			BG_COLOR: '#5D9DFF',
			BORDER_COLOR: '#5D9DFF',
			TEXT_COLOR: '#FFFFFF',
		},
		hover: {
			BG_COLOR: '#7DB0FF',
			BORDER_COLOR: '#7DB0FF',
			TEXT_COLOR: '#FFFFFF',
		},
	},
	cleared: {
		normal: {
			BG_COLOR: '#7BDC73',
			BORDER_COLOR: '#7BDC73',
			TEXT_COLOR: '#FFFFFF',
		},
	},
	locked: {
		normal: {
			BG_COLOR: 'rgba(55, 135, 255, 0.5)',
			TEXT_COLOR: '#FFFFFF',
			BORDER_COLOR: 'rgba(55, 135, 255, 0.5)'
		},
	},
};

export default colors;
