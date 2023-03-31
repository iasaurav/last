document.write("<div id='git'><\/div><\/br>");
let gmail='offlinesaurav';
var today = new Date();
     var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).toString().slice(8,10);
var date = '-'+today.toLocaleString("default", { month: "2-digit" })+'-'+today.getFullYear();
    var upi = [];
    for ( i = 1; i <= lastDay ; i++) {
       upi.push(i < 10 ? ("0" + i.toString()+date) : i.toString()+date);
    }
var selc = document.getElementById("git"); 
// Optional: Clear all existing options first:
selc.innerHTML = "";
// Populate list with options:
for(var c = 0; c < upi.length; c++) {
    var oap = upi[c];
    selc.innerHTML +=  "<input  type='text'value='"+gmail+"+"+oap+"@gmail.com'readonly></br>" ;
}
