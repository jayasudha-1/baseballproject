import React from 'react';

import { useLocation } from 'react-router-dom';

function ResultPage() {

 const location = useLocation();

 const selectedPlayers = location.state;

 function calculateWinChance() {

   const p1 = selectedPlayers[0];

   const p2 = selectedPlayers[1];

   const chance = (p1.player_rating / (p1.player_rating + p2.player_rating)) * 100;

   return chance.toFixed(2);

 }

 return (

   <div className="result-page">

     <h1>Result Page</h1>

     <p>Selected Players:</p>

     

     <p>Win Chance: {calculateWinChance()}%</p>

   </div>

 );

}

export default ResultPage;