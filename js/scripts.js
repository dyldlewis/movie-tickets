function Ticket(age, showtime) {
  this.age = age;
  this.showtime = showtime;
}

Ticket.prototype.price = function() {
  if (this.showtime === "evening") {
    if (this.age <= 12) {
      return 6.00;
    } else if (this.age >= 65) {
      return 7.00;
    } else {
      return 10.00;
    }
  } else {
    if (this.age <= 12) {
      return 4.00;
    } else if (this.age >= 65) {
      return 5.00;
    } else {
      return 8.00;
    }
  }
};

//party in the back
$(document).ready(function() {
  $("#Harry-Potter").submit(function(event) {
    event.preventDefault();

    var showtime = $("#showtimes").val();
    var age = parseInt($("#age").val());
    var newTicket = new Ticket(age, showtime);
    $("#info").show();
    $(".panel-heading").text("Enjoy the show!");
    $(".panel-body").empty();
    $(".panel-body").append("Title: Harry Potter and the Prisoner of Azkaban" +
    "<br>" + newTicket.showtime + " show" + "<br>" +
    "Price : $" + newTicket.price() + ".00");
  });
  $("#Remember-The-Titans").submit(function(event) {
    event.preventDefault();

    var showtime = $("#showtimes").val();
    var age = parseInt($("#age").val());
    var newTicket = new Ticket(age, showtime);
    $("#info").show();
    $(".panel-heading").text("Enjoy the show!");
    $(".panel-body").empty();
    $(".panel-body").append("Title: Remember The Titans" +
    "<br>" + newTicket.showtime + " show" + "<br>" +
    "Price : $" + newTicket.price() + ".00");
  });
  $("#Ace-Ventura").submit(function(event) {
    event.preventDefault();

    var showtime = $("#showtimes").val();
    var age = parseInt($("#age").val());
    var newTicket = new Ticket(age, showtime);
    $("#info").show();
    $(".panel-heading").text("Enjoy the show!");
    $(".panel-body").empty();
    $(".panel-body").append("Title: Ace Ventura: Pet Detective" +
    "<br>" + newTicket.showtime + " show" + "<br>" +
    "Price : $" + newTicket.price() + ".00");
  });

});
