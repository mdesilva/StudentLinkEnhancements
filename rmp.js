//GO TO PROF PAGE IF ONLY ONE RESULT EXISTS ON RMP.com
var listingsNumChildren = $(".listings").children().length;
if(listingsNumChildren === 1){
  $('.listing-name').click();
}
