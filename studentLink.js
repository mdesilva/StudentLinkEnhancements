console.log("Ratings app is running");

var namesArray = new Array();
var rmpLogo = "<img src=https://image.ibb.co/gBGkkv/rmpLogo.png />"

$("tr").each(function (index){ //loop through each <tr> element. index is the variable.
try{
url = "http://www.ratemyprofessors.com/search.jsp?queryoption=HEADER&queryBy=teacherName&schoolName=boston+university&schoolID=&query="
name = $('table').eq(5).find("tr:eq("+index+")").find('td:eq(2)').find('br').get(0).nextSibling.nodeValue; //get name
if(name != "null"){ //if name is not wrapped in <a> tag, then append it to the url
//console.log("name is " + name);
url = url + name;
}
else{ //if name is === "null", then it is wrapped in <a> tag, so reconstruct it again and then append an actual name to the url
name = $('table').eq(5).find("tr:eq("+index+")").find('td:eq(2)').find('a').html()
//console.log("name is " + name);
url = url + name;
}

if ($.inArray(name, namesArray) === -1 && name != "Staff"){ //if the name is not found in the list of names that were already traversed
  namesArray.push(name); //push that name into the list
  var instructorCol = $('table').eq(5).find("tr:eq("+index+")").find("td:last()"); //get the last column
  var link = "<a href="+url+" target=_blank><p>View Professor "+name+"'s Rating </p></a>"
  instructorCol.after(link); //create new col with links to prof ratings
  console.log(url);
}

}
catch(e){ //if a <tr> element is reached where no names are found and the function is undefefined, then catch the error.
if(e){
   //console.log(e.name + ", " + e.message); //print error name and message
}
}
});

console.log("ratings app done traversing the page")
