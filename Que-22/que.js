const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24,]

ages.sort((a,b)=>a-b);


console.log(ages)


//median

let median;
if (ages.length % 2 !==0){
    let middleIndex = Math.floor(ages.length/2)
median =ages[middleIndex]
}
else{let middleIndex=Math.floor(ages.length/2)
median= (ages[middleIndex] + ages[middleIndex-1])/2}


console.log('the median value is '+median);


// max and min value

let c =Math.max(...ages)
let d =Math.min(...ages)
console.log('the maximum value is '+c)
console.log('the minimum value is ' + d)


//avg
function sum(arr){
    let sum=0;
    for (let i=0; i< arr.length; i++)
    {sum=sum+arr[i];}
    return sum;
}

let total= sum(ages)

let average = (total/ages.length)

console.log('the average is '+ average)


//range


let max =Math.max(...ages)
let min =Math.min(...ages)

let range= (max-min)

console.log('range is ' + range)



//diffrence using abs method

function diffrence(a,b)
{ 
    return Math.abs(a- b);
}


let k=diffrence (max,min)


console.log(k)







