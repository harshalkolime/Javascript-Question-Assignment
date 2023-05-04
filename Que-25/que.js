let weight ='90'
let height ='1.6'

let bmi = (weight/(height*height))



if(bmi < 18.5){ var result='normal weight'}

else if (bmi >= 18.5 && bmi <= 24.9){
    var result='normal weight'}

else if (bmi >= 25 && bmi <= 29.9){
        var reslt='Over-weight' }

else if (bmi >= 30 ){
            var result='Obese'}

console.log(result)