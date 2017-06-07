//GENERAL LOGIC FOR ADDING RATEMYPROF LINKS ON THE STUDENT LINK NEXT TO PROF names
//currently working specificly on university class schedule

//if prof name is wrapped in an <a> tag
//in table 5, find relevant row(variable),go to column 2, then get prof name in <a> link;
$('table').eq(5).find("tr:eq(var)").find('td:eq(2)').find('a').html()


//else, if it is not wrapped in an "a" tag,
//in table 5, find relevant row(variable), go to column 2, find the <br> tag, then get the name that is directly after it.
$('table').eq(5).find("tr:eq(var)").find('td:eq(2)').find('br').get(0).nextSibling.nodeValue



//url template for ratemyprof.com for BU
url = "http://www.ratemyprofessors.com/search.jsp?queryoption=HEADER&queryBy=teacherName&schoolName=boston+university&schoolID=&query="


//logic
append professors name to the url, then open it;


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

var instructorCol = $('table').eq(5).find("tr:eq("+index+")").find("td:eq(2)"); //specify column 2, which lists all the professors and classes
var link = "<a href="+url+" target=_blank><p> Click for prof rating </p></a>"
instructorCol.after(link); //create new col with links to prof ratings
console.log(url);
}
catch(e){ //if a <tr> element is reached where no names are found and the function is undefefined, then catch the error.
if(e){
   //console.log(e.name + ", " + e.message); //print error name and message
}
}
});
