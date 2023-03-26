document.write("<div id='json'><\/div>");
var source='J1:J100';
  
var id='1n5RSc9jnxqKr_rcfCZ1Uci90CApBl0y2BDn_WHs8W8A';
var gid = '2082189564';

var _0xe368=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x73\x70\x72\x65\x61\x64\x73\x68\x65\x65\x74\x73\x2F\x64\x2F","\x2F\x67\x76\x69\x7A\x2F\x74\x71\x3F\x74\x71\x78\x3D\x6F\x75\x74\x3A\x6A\x73\x6F\x6E\x26\x74\x71\x26\x67\x69\x64\x3D","\x26\x73\x69\x6E\x67\x6C\x65\x3D\x74\x72\x75\x65\x26\x72\x61\x6E\x67\x65\x3D"];var url=_0xe368[0]+ id+ _0xe368[1]+ gid+ _0xe368[2]+ source
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("json").innerHTML=myItems(data.slice(47, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = "<table id='custom'><thead><tr><th>Recent </th><th>Website</th><tr></thead><tbody id='myTable'>"
  json.table.cols.forEach(colonne => table += '' + colonne.label + '')
  table += ''
  json.table.rows.forEach(ligne => {
    table += ""
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += "" + valeur + ""
      }
    )
    table += ""
    }
  )
  table += "</table>"
  return table
}
