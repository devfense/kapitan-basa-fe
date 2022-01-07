import React, { useState } from 'react';
import './styles/index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './layouts/Navigation/Sidebar';
import TopHeader from './layouts/Navigation/TopHeader';
import Dashboard from './views/Dashboard/Dashboard';
import Game from './views/Game/Game';
import TabulationAndResult from './views/TabulationAndResult/TabulationAndResult';
import UserManagament from './views/UserManagement/UserManagament';
import { theme } from './themes';
import Landing from './views/Landing';
import LocaleContext, { useLocaleContext } from './providers/localization';
import store from './store';
import DialogProvider from './providers/dialog';

const Container = styled.div`
    display: flex;
`;

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #F2F7FF;
    margin-top: 51px;
`;

const Root = () => {


  const contextStrings = useLocaleContext();
  contextStrings.setLanguage('en');

  const [toggle, setToggle ] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }
  
  

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.default}>
        <Router>
          <LocaleContext.Provider value={contextStrings}>
            <DialogProvider>
              <Routes>
                 <Route path="/" element={<Landing />} />
              </Routes>
              <Container>
                <Sidebar toggle={toggle} handleClick={() => handleClick()}/>
                <TopHeader handleClick={() => handleClick()}/>
                <MainContainer>
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/game" element={<Game />} />
                      <Route path="/results" element={<TabulationAndResult />} />
                      <Route path="/user-management" element={<UserManagament />} />
                    </Routes>
                </MainContainer>
              </Container>
            
            </DialogProvider>
          </LocaleContext.Provider>
        </Router>
      </ThemeProvider>
    </Provider>
    
  );
}

export default Root;
