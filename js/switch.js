document.getElementById('B_BA').style.display = "none";
document.getElementById('A_BA').style.display = "block";
function clickSwitch(_player) {
  var isA = 0; // 現在地判定
  var A_act = document.getElementById('A_BA');
  var B_act = document.getElementById('B_BA');
  if(A_act.style.display=="block" && _player=='B'){
    A_act.style.display = "none";
    B_act.style.display = "block";
  console.log(A_act.style.display);
  }
  else if(B_act.style.display=='block' && _player=='A') {
    A_act.style.display = "block";
    B_act.style.display = "none";
  console.log(A_act.style.display);
  }
};
document.addEventListener("DOMContentLoaded", clickSwitch, false);
