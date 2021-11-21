import React from 'react';
import './Root.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './layouts/Navigation/Sidebar';
import TopHeader from './layouts/Navigation/TopHeader';
import Dashboard from './views/Dashboard/Dashboard';
import Game from './views/Game/Game';
import { theme } from './themes';
import Landing from './views/Landing';
import LocaleContext, { useLocaleContext } from './providers/localization';

const Container = styled.div`
    display: flex;
`;

const MainContainer = styled.div`
    display: flex;
    widht: 70%;
    background-color: #FFFFFF;
    margin-top: 51px;
`;

const Root = () => {
  const contextStrings = useLocaleContext();
  contextStrings.setLanguage('en');

  return (
    <ThemeProvider theme={theme.default}>
      <Router>
        <LocaleContext.Provider value={contextStrings}>
          {window.location.pathname === '/' ? <Landing /> :
            <Container>
              <Sidebar />
              <TopHeader />
              <MainContainer>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/game" element={<Game />} />
                  </Routes>
              </MainContainer>
            </Container>
          }
        </LocaleContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default Root;