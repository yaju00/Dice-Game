"use strict";

let diceImage=document.querySelectorAll('.dice');
let diceRoll=document.querySelector('.btn--roll');
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const currScore0=document.querySelector('#current--0');
const currScore1=document.querySelector('#current--1');
const hold=document.querySelector('.btn--hold');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
score0.textContent=0;
score1.textContent=0;
let total1=0;
let total2=0;
let sum1=0;
let sum2=0;
const totaling=function(num,sum){
    if(num+1!==1){
        sum+=(num+1);
     }  
     else{
         sum=0;
         if(player0.classList.contains('player--active')){
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
        }
        else if(player1.classList.contains('player--active')){
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
        }
     }
     return sum;
}
const scoreDisplay=function(){

}

diceRoll.addEventListener('click',function(){
    const num=Math.trunc(Math.random()*6);
    for(let i=0;i<diceImage.length;i++){
        if(i===num){
            diceImage[i].classList.remove('hidden') 
        } 
        else{
            diceImage[i].classList.add('hidden') 
        }    
     } 
   if(player0.classList.contains('player--active')){
    sum1=totaling(num,sum1);
    currScore0.textContent=sum1;
    console.log(sum1);
   }
   else{
    sum2=totaling(num,sum2);
    currScore1.textContent=sum2;
   }
})

hold.addEventListener('click',function(){
    if(player0.classList.contains('player--active')){
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
         total1+=sum1;
         score0.textContent=total1;
         sum1=0;
         currScore0.textContent=sum1;
    }
    else if(player1.classList.contains('player--active')){
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
        total2+=sum2;
        score1.textContent=total2;
        sum2=0;
        currScore1.textContent=sum2;
    }
    // playerChange(sum1,sum2);
    })

    document.querySelector('.btn--new').addEventListener('click',function(){
        sum1=0;
        sum2=0;
        total1=0;
        total2=0;
        score0.textContent=total1;
        currScore0.textContent=sum1;
        score1.textContent=total2;
        currScore1.textContent=sum2;
    })
console.log(diceImage)