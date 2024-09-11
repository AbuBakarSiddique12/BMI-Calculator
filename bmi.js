function calculateBMI(){
  let heit = document.querySelector('#height').value;
  let hightMetr = heit/100;
  let wight = document.querySelector('#weight').value;
  let bmi = (wight/(hightMetr*hightMetr)).toFixed(2);
  let res='';
  if(hightMetr>0 && wight>0){
    
    if(bmi<18.5){
      res = 'Underweight';
    }
    else if(bmi>18.5 && bmi<24.9){
      res = 'Normal';
    }
    else if(bmi>25 && bmi<29.9){
      res = 'OverWeight';
    }
    else {
      res = 'Obesity';
    }
    document.querySelector('#result').innerHTML=`Your Bmi is ${bmi} and ${res}`; 
    }
  else{
    document.querySelector('#result').innerHTML=`Please Insert Valid Height and Weight`; 
  
  }
  
}