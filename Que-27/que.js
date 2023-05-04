
for (a=2; a<101; a++)
{var c=true;
for(b=2; b<a; b++){
   if (a%b==0)
   {
      c=false;
      break;
   }
}
if(c){console.log(a)}
}