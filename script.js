'use strict';
const score0el=document.querySelector('#score--0')  //here # is used in case of . because we are selecting is now incase of class
const score1el=document.getElementById('score--1')  //this works exactly same as queryselector difference is queryselector can select bith class and id but it can select only id
const player0el=document.querySelector('.player--0')
const player1el=document.querySelector('.player--1')

const xel=document.querySelector('#current--0')  
const yel=document.getElementById('current--1') 

const diceel=document.querySelector('.dice')
const  btnroll=document.querySelector('.btn--roll')
const  btnnew=document.querySelector('.btn--new')
const  btnhold=document.querySelector('.btn--hold')

let scores, currentscore, activeplayer, playing

const init=()=>{
    currentscore=0
    activeplayer=0
    scores=[0,0]
    score0el.textContent=0
    score1el.textContent=0
    playing=true
    scores=[0,0]//score are 0
    diceel.classList.add('hidden')//hide the dice
    document.getElementById('current--0').textContent=0
    document.getElementById('current--1').textContent=0  
player0el.classList.remove('player--winner')
player1el.classList.remove('player--winner')
player0el.classList.remove('player--active')
player1el.classList.remove('player--active')

}

const switchplayer=()=>{document.getElementById(`current--${activeplayer}`).textContent=0;

currentscore=0
activeplayer=activeplayer===0?1:0
player0el.classList.toggle('player--active')        //toggle is used to do if this is there then it will remove it and if it is not there it will add it
player1el.classList.toggle('player--active')}

btnnew.addEventListener('click',init)

init();

btnroll.addEventListener('click',function(){
   if(playing)
    { // generating a random num
    const dicee=Math.trunc(Math.random()*6)+1
    //display the image
    diceel.classList.remove('hidden');
     diceel.src=`dice-${dicee}.png`;

    // check image if it is 1,if true switch to next player
    if(dicee!==1){
        // add dice to current score
        currentscore=currentscore+dicee
        document.getElementById(`current--${activeplayer}`).textContent=currentscore
      
       

    }
    else{
// switch to next player
switchplayer()


    }}
})
btnhold.addEventListener('click',function(){
   if(playing)
    {// add current score to activeplayer score
    scores[activeplayer]+=currentscore
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer]
    // check player score is greater then 20
    if(scores[activeplayer]>=20){

    // then exit
    playing=false
    diceel.classList.add('hidden')
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
     document.querySelector(`.player--${activeplayer}`).classList.add('player--winner') 
}

    // skip to the next player
    else
    {switchplayer()}}
})