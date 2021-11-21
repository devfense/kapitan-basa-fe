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

const Container = styled.div`
    display: flex;
`;

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #F2F7FF;
    margin-top: 51px;
`;

function Root() {

  return (
    <ThemeProvider theme={theme.default}>
      <Router>
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
      </Router>
    </ThemeProvider>
  );
}

export default Root;
