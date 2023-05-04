let a = 29;


if(a == 1){console.log( a + ' is not a prime number')
}
else if( a < 1){console.log(a + ' is not a prime number')}

else{
    
    for(i=2; i <a; i++ )
    {
        if(a % i ===0){var result = 'non prime';
           break;}
        else{ var result = 'prime';}
    }
    console.log(result);
}


//yaha par var result ki jagah let result nahi likh sakte kyuki let ki jo value hoti hai vo statement end or brackets tak hi simit hoti hai agar var ki jagah let likhenge toh error ayega 
