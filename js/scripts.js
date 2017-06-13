function costCalc(age, showtime) {
  if (showtime === "evening") {
    if (age <= 12) {
      return 6.00;
    } else if (age >= 65) {
      return 7.00;
    } else {
      return 10.00;
    }
  } else {
    if (age <= 12) {
      return 4.00;
    } else if (age >= 65) {
      return 5.00;
    } else {
      return 8.00;
    }
  }
};

function Ticket(age, showtime, price) {
  this.age = age;
  this.showtime = showtime;
  this.price = price;
}


//party in the back
$(document).ready(function() {
  $("#screen1").submit(function(event) {
    event.preventDefault();

    var showtime = $("#showtimes").val();
    var age = parseInt($("#age").val());
    var price = costCalc(age, showtime);
    var newTicket = new Ticket(age, showtime, price);

  });
});
