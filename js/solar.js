export class SolarAge {

  constructor(bDay){
    this.bDay = bDay;
}

getSecond(age){
  const secPerYear = 1000 * 60 * 60 * 24 * 365;
  let sec = Math.floor((age * secPerYear));
  return sec;
}
getEarth(now, born){
  let today = moment(now);
  let birth = moment(born);
  let output = ((Date.now() - birth / (31557600000));
  return output;
}
getMercury(age){
  let mercury = Math.floor((age*.24));
  return mercury;
}
getVenus(age){
  let venus = Math.floor((age*.62));
}
getMars(age){
  let mars = Math.floor((age*1.88));
}
getJupiter(age){
  let jupiter = Math.floor((age*11.86));
}
}
