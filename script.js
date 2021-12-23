const seunome = prompt ("Qual é o seu Nome?");
document.write("Bem-vindo(a) " + seunome);
console.log(seunome);
 
const d = new Date();
const hour = d.getHours();

if(hour >= 6 && hour < 12) {
   document.write("<br> Bom dia.");
   alert("Bom dia! 1");
} else if(hour < 18) {
   document.write("<br> Boa tarde.");
   alert("Boa tarde!");
} else{
   document.write("<br> Boa noite.");
   alert("Boa noite!");
}
