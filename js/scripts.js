$(function(){

  $(".ownInfo").submit(function(){
    var person1 = $("input#firstname").val();
    var person2 =
    $("input#lastname").val();

    $(".firstname").text("person1");
    $(".lastname").text("person2");

    var color = $("input:radio[name=color]:checked").val();

    var food = $("#food").val();

    $(".panel").show();
    event.preventDefault();
  });
});
