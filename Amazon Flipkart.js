document.write("Amazon-:<div id='git'><\/div><\/br>\r\nFlipkart-:<div id='gith'><\/div>");
  var selc = document.getElementById("git"); 
var upi = [];
    for ( i = 10; i <= 99 ; i++) {
       upi.push(i < 10 ? ("0" + i.toString()) : i.toString());
    }
// Optional: Clear all existing options first:
selc.innerHTML = "";
// Populate list with options:
for(var c = 0; c < upi.length; c++) {
    var oap = upi[c];
  let link="https://www.amazon.in/gp/your-account/order-history?unifiedOrders=0&digitalOrders=0&janeOrders=0&orderFilter=year-20"+oap;
  selc.innerHTML += "<a href='" + link + "'>20" + oap.charAt(0).toUpperCase() + oap.slice(1) + "</a>, ";
}
  var selct = document.getElementById("gith"); 
// Optional: Clear all existing options first:
selct.innerHTML = "";
// Populate list with options:
for(var co = 0; co < upi.length; co++) {
    var oap = upi[co];
  let link="upi://pay?pa="+oap+"&pn=SauravKumar&am=";
  let encoded = "https://www.flipkart.com/rv/orders/search?order_time=20"+oap;
    selct.innerHTML += "<a href='"+encoded+"'>20"+oap+"</a>, ";
}
  
  
  


   

  
  

  
  
  
  
  
