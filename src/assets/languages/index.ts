import LocalizedStrings from 'react-localization';

import { LocaleStrings } from '../../providers/localization/types';
import en from './en';
import tagalog from './tagalog';

const strings = new LocalizedStrings<LocaleStrings>({
	en,
	tagalog
});

export default strings;