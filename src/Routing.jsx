import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageNotFound from './components/PageNotFound/PageNotFound';
import Manage from './components/HeaderDesign/Manage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/manage" element={<Manage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
