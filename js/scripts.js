$(document).ready(function() {
    $("button#green").click(function() {
      $("body").addClass("green-background");
      $("body").removeClass();
    });
  
    $("button#yellow").click(function() {
      $("body").addClass("yellow-background");
      $("body").removeClass();
    });
  
    $("button#red").click(function() {
      $("body").addClass("red-background");
      $("body").removeClass();
    });
  });