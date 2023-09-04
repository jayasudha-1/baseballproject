import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PlayerSelection from './PlayerSelection';

import ResultPage from './ResultPage';

function App() {

 return (

   <Router>

     <Routes>

       <Route path="/" exact component={PlayerSelection} />

       <Route path="/result" component={ResultPage} />

     </Routes>

   </Router>

 );

}

export default App;