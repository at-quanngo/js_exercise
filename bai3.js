var str = prompt("Nhập số a");
/*var tong = '';
for (var i = 0; i <= 9; i++) {
  var tempt = str.replace('*', 'i');
  tong =
}*/
//var tong = '';
for (var i = 0; i <= 9; i++) {
  var tempt = str.replace("*", i);
  if (parseInt(tempt) % 3 == 0) {
    console.log(tempt);
  }
}
