/*
    Author : Fawad Shah
    JavaScript developer 
*/

let scores,roundScore,activePlayer,gamePlaying;

let init = ()=> {
    gamePlaying=true;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;

    document.querySelector('.dice').style.display='none';

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';

    document.querySelector('#name-0').textContent='Player 0';
    document.querySelector('#name-1').textContent='Player 1';
    document.querySelector('.player-0-panel').classList.remove('Winner!');
    document.querySelector('.player-1-panel').classList.remove('Winner!');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
    init();


let nextPlayer=()=> {
    activePlayer===0 ? activePlayer=1:activePlayer=0;
    roundScore=0;

    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
}


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){

    // Generate Random Roll
    let dice=Math.floor(Math.random()*6)+1;

    // Print the result and display hidden rolled Image
    let diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    // Update the round score
    if(dice!==1){
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else {
        // Next Player 
        nextPlayer();
    }
    }

});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){

    // Pass the current score to GLOBAL
    scores[activePlayer]+=roundScore;

    // Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];


    // Display the Winner
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner!');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('Winner!');
        gamePlaying=false;
    }
    else {
        nextPlayer();
    }
    
    }
    
});

document.querySelector('.btn-new').addEventListener('click',init);



















































/*

let scores,roundScore,activePlayer,gamePlaying;

let init = ()=> {
    gamePlaying=true;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;

    document.querySelector('.dice').style.display='none';

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';

    document.querySelector('#name-0').textContent='Player 0';
    document.querySelector('#name-1').textContent='Player 1';
    document.querySelector('.player-0-panel').classList.remove('Winner!');
    document.querySelector('.player-1-panel').classList.remove('Winner!');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
    init();


let nextPlayer=()=> {
    activePlayer===0 ? activePlayer=1:activePlayer=0;
    roundScore=0;

    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
}


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){

    // Generate Random Roll
    let dice=Math.floor(Math.random()*6)+1;

    // Print the result and display hidden rolled Image
    let diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    // Update the round score
    if(dice!==1){
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else {
        // Next Player 
        nextPlayer();
    }
    }

});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){

    // Pass the current score to GLOBAL
    scores[activePlayer]+=roundScore;

    // Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];


    // Display the Winner
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner!');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('Winner!');
        gamePlaying=false;
    }
    else {
        nextPlayer();
    }
    
    }
    
});

document.querySelector('.btn-new').addEventListener('click',init);

/*




