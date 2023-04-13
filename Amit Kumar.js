<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

</br>
</br>
Receiever Name-: Amit Kumar</br>
<input id="amount" type='tel' placeholder='Enter-Amount'onchange="myFunction()">
<p id="demo"></p>
<script>
  
  
function myFunction() {
  var y = document.getElementById("amount").value;
var x = '9386033643@paytm';
 
      
      
      
let z="paytmmp://pay?pa="+x+"&pn=Amit Kumar&am="+y;
  
  let qr = "https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl="+encodeURIComponent(z);
  
let a= "<a href='"+z+"'>Qr-Code Of ₹:"+y+"</a></br><img src='"+qr+"'>";
  document.getElementById("demo").innerHTML = a;
}
</script>
