import {SolarAge} from './../js/solar.js'

$(document).ready(function() {
  $('#solar-form').submit(function(event) {
    event.preventDefault();
    let bDay = $('#bDay').val();
    let solarCalculator = new SolarAge();
    let userAge = solarCalculator.getEarth(now, born);
    let world = $('#world').val();
    let merAge = solarCalculator.getMercury(age);
    let venAge = solarCalculator.getVenus(age);
    let marAge = solarCalculator.getMars(age);
    let jupAge = solarCalculator.getJupiter(age);

      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
