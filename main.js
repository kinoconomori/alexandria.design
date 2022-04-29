

$( function() {
   $( ".drag1" ).draggable({ containment: ".play", scroll: false });
    $( ".drag2" ).draggable({ containment: "parent" });
    $( ".drag3" ).draggable({ containment: "parent" });
    $( ".drag4" ).draggable({ containment: "parent" });
    $( ".drag5" ).draggable({ containment: "parent" });
    $( ".drag6" ).draggable({ containment: "parent" });
    $( ".drag7" ).draggable({ containment: "parent" });
    $( ".drag8" ).draggable({ containment: "parent" });
    $( ".drag9" ).draggable({ containment: "parent" });
    $( ".drag10" ).draggable({ containment: "parent" });
    $( ".drag11" ).draggable({ containment: "parent" });
    $( ".drag12" ).draggable({ containment: "parent" });
    $( ".drag13" ).draggable({ containment: "parent" });
    $( ".drag14" ).draggable({ containment: "parent" });
    $( ".drag15" ).draggable({ containment: "parent" });
    $( ".drag16" ).draggable({ containment: "parent" });
  } );





$(document).ready(function() {
            var colors = ["#ee4b38", "#31a676", "#77cdd7", "#f1bc3e"];
            var rand = Math.floor(Math.random() * colors.length);
            $('.profilehead').css("color", colors[rand]);
            $('.overlay').css("background-color", colors[rand]);
});

$(document).ready(function() {
            var colors = ["#ee4b38", "#31a676", "#77cdd7", "#f1bc3e"];
            var rand = Math.floor(Math.random() * colors.length);
            $('.mainhead').css("color", colors[rand]);
            $('.overlay').css("background-color", colors[rand]);
            $('.footer').css("background-color", colors[rand]);
});
  
