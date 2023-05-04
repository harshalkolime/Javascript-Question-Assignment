//triangle pattern
var rows = 5

function pattern(rows) {

   for (i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) { document.write("*") };

      document.write("</br>");
   }
}
pattern(rows)


//square pattern

var row = 3

function square(row) {

   for (let i =1; i <=row; i++) {
      document.write("*");

      for (let j = 1; j <row; j++) { document.write("*"); };
      document.write("<br>");
   }

}

square(row)



//pattern
var rowss = 10

function patterns(rowss) {

   for (let a = 1; a <= rowss; a++) {

    if(a%2 ==1){
       for(let k=1; k<=(rowss-a); k++){document.write("&nbsp")}
      for (let j = 1; j <= a; j++) { document.write("*") };

      document.write("</br>");
   }}
}
patterns(rowss)



