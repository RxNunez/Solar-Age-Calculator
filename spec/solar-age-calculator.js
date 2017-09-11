import {SolarAge} from './../js/solar.js'

describe ('SolarAge', function(){
  var solarAge;

  beforeEach(function(){
  solarAge = new SolarAge(3);
  });

  it('should test whether it can instantiates a solarAge object',function(){
    expect(solarAge.bDay).toEqual(3);
  });
