'use strict';
// selecting elements
const player0Label=document.querySelector('.player--0');
const player1Label=document.querySelector('.player--1');
const player1Score=document.querySelector('#score--0');
const player2Score=document.querySelector('#score--1');
const currentScorePlayer0= document.getElementById('current--0');
const currentScorePlayer1= document.getElementById('current--1');
const diceElement=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer =activePlayer===0?1:0;
    player0Label.classList.toggle('player--active');
    player1Label.classList.toggle('player--active');
};
let scores,currentScore ,activePlayer, playing;
const init=function(){
    // setting initial values
    scores=[0,0];
     currentScore=0;
     activePlayer=0;
     playing=true;
    player1Score.textContent='0';
    player2Score.textContent='0';
    currentScorePlayer0.textContent='0';
    currentScorePlayer0.textContent='0';

    diceElement.classList.add('hidden');
    player0Label.classList.remove('player--winner');
    player1Label.classList.remove('player--winner');
    player0Label.classList.add('player--active');
    player1Label.classList.remove('player--active');
   
};
init();

btnRoll.addEventListener('click',function(){
    if(playing){
    const diceNumber=Math.trunc(Math.random()*6)+1;
    diceElement.classList.remove('hidden');
    diceElement.src=`dice-${diceNumber}.png`;
    if(diceNumber!=1)
    {
        currentScore+=diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else{
       switchPlayer();

    }
}
})
 
btnHold.addEventListener('click',function(){
    if(playing){
  scores[activePlayer]+=currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  if(scores[activePlayer]>=20)
  {  playing= false;
     diceElement.classList.add('hidden');
     document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
     document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }
  else{
      switchPlayer();
}
    }
})
btnNew.addEventListener('click',init);