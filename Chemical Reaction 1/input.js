document.getElementById("submit").addEventListener("click", takeInput, { once: true });
document.getElementById("refresh").addEventListener("click", refresh);
function takeInput() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  p = parseInt(input1);
  q = parseInt(input2);
  main(p,q);
}
function refresh() {
    location.reload();
}



  
