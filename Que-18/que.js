
let month = "February"
let year = 2004


if (month== "December"){document.write("31")}
else if (month== "November" ){document.write("30")}
else if (month== "October" ){document.write("31")}
else if (month== "September" ){document.write("30")}
else if (month== "August"){document.write("31")}
else if (month== "July"){document.write("30")}
else if (month== "June"){document.write("31")}
else if (month== "May"){document.write("30")}
else if (month== "April"){document.write("31")}
else if (month== "March"){document.write("30")}
else if (month== "January"){document.write("31")}
else if ( year % 4 == 0 && month=="February" ){document.write("29")}
else if ( month=="February"  ){document.write("28")}



else {document.write("Write a month name")};






