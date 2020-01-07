var str = prompt("Nhập số a");
for (var i = 0; i <= 9; i++) {
  var tempt = parseInt(str.replace("*", i));
  if (tempt % 3 == 0 && tempt % 2 == 0) {
    console.log(tempt);
  }
}