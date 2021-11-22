import { createContext, useContext } from 'react';
import { LocalizedStrings }  from 'react-localization';
import { LocaleStrings } from './types';
import strings from '../../assets/languages';

const localeContext = createContext(strings)

export const useLocaleContext = (): LocalizedStrings<LocaleStrings> => useContext(localeContext);

export default localeContext;