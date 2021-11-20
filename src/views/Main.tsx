import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../layouts/Navigation/Sidebar';
import TopHeader from '../layouts/Navigation/TopHeader';
import Dashboard from './Dashboard/Dashboard';
import Game from './Game/Game';

const Container = styled.div`
    display: flex;
`;

const MainContainer = styled.div`
    display: flex;
    widht: 70%;
    background-color: #FFFFFF;
`;

const Main: FunctionComponent = () => {
    return(
        <Router>
          <Container>
            <Sidebar />
            <MainContainer>
              <TopHeader />
                <Routes>
                  <Route path="/" element={<Main/>} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/game" element={<Game />} />
                </Routes>
            </MainContainer>
          </Container>
        </Router>
    )
};

export default Main;