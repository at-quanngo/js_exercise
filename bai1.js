var a = parseInt(prompt("Nhập số a"));
var b = parseInt(prompt("Nhập số b"));

/*function sumTriple (x, y) {
  if (x == y) {
    return 3 * (x + y);
    } 
   else
   {
    return (x + y);
   }
 }
 console.log(sumTriple(a, b));*/
console.log((a + b) * (a == b ? 3 : 1));