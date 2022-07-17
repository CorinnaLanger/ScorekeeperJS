let total = 0;
let total2 = 0;
let homescore = 0;
let awayscore = 0;
document.getElementsByClassName('buttons');
document.getElementsByClassName('buttons2');
document.getElementsByClassName('buttons3');
document.getElementsByClassName('buttonsaway');
document.getElementsByClassName('buttonsaway1');
document.getElementsByClassName('buttonsaway2');
document.getElementById('reset');


function counter1() {
    total = total +1;
    document.getElementById('scorenumber').innerHTML = total;
  }
  function counter2() {
    total = total +2;
    document.getElementById('scorenumber').innerHTML = total;
  }
  function counter3() {
    total = total +3;
    document.getElementById('scorenumber').innerHTML = total;
  }
  function counter4() {
    total2 = total2 +1;
    document.getElementById('scorenumber2').innerHTML = total2;
  }
  function counter5() {
    total2 = total2 +2;
    document.getElementById('scorenumber2').innerHTML = total2;
  }
  function counter6() {
    total2 = total2 +3;
    document.getElementById('scorenumber2').innerHTML = total2;
  }

 function counterreset() {
    total = 0;
    total2 = 0;
     document.getElementById('scorenumber').innerHTML = total ;
     document.getElementById('scorenumber2').innerHTML = total2 ;
   
    

 }