// This is where it all goes :)

$(document).ready(function(){
  $(".foo-parent").hover(function(){
    console.log("did this work?");
    $("body").css("background-color","red");
  });

  $(".foo-parent").mouseleave(function(){
    $("body").css("background-color","white");
  });
});​
