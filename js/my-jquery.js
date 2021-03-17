$(document).ready(function()
  { $(".hcaption").show(700),
   $(".fristBox").animate({
  marginTop :'40px'
  },700),
      $(".scription").animate({
    marginTop:'50px'
 },700);
 });

$(window).scroll(function(){
   if ($(window).scrollTop() >= 250){
    $(".scondBox").animate({
  marginTop :'40px'
  },500);   
   }
});
 
$(window).scroll(function(){
   if ($(window).scrollTop() >= 530){
    $(".third-box").animate({
  marginTop :'40px'
  },500); 
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 1000){
    $(".fored-part").animate({
  marginTop :'40px',
  },500);
   }
});