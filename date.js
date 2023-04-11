<input id="mySelect"type='date'onchange="myFunction()">
  

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("mySelect").value;
  
  
  var date=new Date();  
var day=date.getDate();  
var month = date.toLocaleString("default", { month: "2-digit" });
var year=date.getFullYear(); 
  
  
  
  
 
  
  let result = x.slice(5,7)+"%2f"+x.slice(8,12)+"%2f"+x.slice(0,4);
  
  let resul = x.slice(8,12)+"-"+x.slice(5,7)+"-"+x.slice(0,4);
  
  let age = month+"%2f"+day+"%2f"+year;
  
  let ager = "https://www.calculator.net/age-calculator.html?today="+result+"&ageat="+age+"&x=129&y=17";
  
  
  
  
  document.getElementById("demo").innerHTML = "<a href='" +ager+"'>"+resul+"</a>"
  
  
 ;
}
</script>
