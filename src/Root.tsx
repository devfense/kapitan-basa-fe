import './styles/index.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './MainContent';
import { theme } from './themes';
import Landing from './views/Landing';
import LocaleContext, { useLocaleContext } from './providers/localization';
import store from './store';
import DialogProvider from './providers/dialog';

const Root = () => {
	const contextStrings = useLocaleContext();
	contextStrings.setLanguage('en');

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme.default}>
				<Router>
					<LocaleContext.Provider value={contextStrings}>
						<DialogProvider>
							<Routes>
								<Route path="/" element={<Landing />} />
							</Routes>
							<MainContent />
						</DialogProvider>
					</LocaleContext.Provider>
				</Router>
			</ThemeProvider>
		</Provider>
    
	);
};

export default Root;
