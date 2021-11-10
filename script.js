var Seunome = prompt ("Qual é o seu Nome?");
document.write(Seunome);
console.log(Seunome);
 
d = new Date();
hour = d.getHours();
if(hour < 5)
{
   document.write("Boa Noite");
   alert("boa noite");
}
else
if(hour < 8)
{
   document.write("Bom Dia");
   alert("Bom dia");
}
else
if(hour < 12)
{
   document.write("Bom Dia!");
   alert("Boa Dia");
}
else
if(hour < 18)
{
   document.write("Boa tarde");
   alert("boa tarde");
}
else
{
   document.write("Boa noite");
   alert("boa noite");
}