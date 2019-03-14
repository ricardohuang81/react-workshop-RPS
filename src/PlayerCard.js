import React from 'react';

const scissors = 'https://i.imgur.com/pgjyhIZ.png';
const rock = 'https://i.imgur.com/LghSkIw.png';
const paper = 'https://i.imgur.com/2gsdqvR.png';

const PlayerCard = props => {
  console.log("[props.sign]", props.sign);
  return (
    <div className="playerCard">
      <img
        alt="rock paper scissors"
        src={props.sign === 'rock' ? rock : props.sign === 'scissors' ? scissors : paper}
      />
    </div>
  );
}


export default PlayerCard;
