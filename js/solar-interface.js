$(document).ready(function() {
  $('#solar-age-form').submit(function(event) {
    event.preventDefault();
    var bDay = $('#bDay').val();
    var solarCalculator = new Calculator("hot pink");
    var output = solarCalculator.solarAgeCalculator(bDay);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
