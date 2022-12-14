import React from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import { GlobalStyles } from './core/styles/global-styles';
import { Home } from './pages/home';
import { Nav } from './core/components/nav';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />

      <Nav />

      <Routes location={location} key={location.pathname}>
        {['/game/:id', '/'].map((path, index) => (
          <Route path={path} element={<Home />} key={index} />
        ))}

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
