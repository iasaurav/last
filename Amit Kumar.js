
<input id="amount" type='tel' placeholder='Enter-Amount'onchange="myFunction()">
<p id="demo"></p>
<script>
function myFunction() {
  var y = document.getElementById("amount").value;
var x = '9386033643@paytm';
let z="paytmmp://pay?pa="+x+"&pn=Amit Kumar&am="+y;
let a= "<a href='"+z+"'>Check-Amount: "+y+"</a></br><img src='"+z+"'>";
  document.getElementById("demo").innerHTML = a;
}
</script>
