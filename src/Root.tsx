import React from 'react';
import './Root.css';
import { Container, Sidebar, SubContainer, Navbar, Content } from './styled-components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './View/Dashboard/Dashboard'
import GameLevel from './View/Game/Game'

function Root() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <SubContainer>
          <Navbar>

          </Navbar>
          <Content>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/game" element={<GameLevel />} />
            </Routes>
          </Content>
        </SubContainer>
      </Container>
    </Router>
  );
}

export default Root;
