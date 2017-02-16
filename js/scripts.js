$(function(){

  $(".ownInfo").submit(function(){
    var person1 = $("input#firstName").val();
    var person2 =
    $("input#lastName").val();

    $(".firstname").text(person1);
    $(".lastname").text(person2);

    var color = $("input:radio[name=color]:checked").val();

    var food = $("#food").val();

    if (color === 'blue'){
      color = 'Travolta'
    } else if ( color === 'red') {
      color = 'Cage'
    } else {
      color = 'Damon'
    }

    $("#celebrity").empty().append(color);
    $(".panel").show();
    event.preventDefault();
  });
});
