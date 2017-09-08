function calcAge(bDay) {
  var birthday = + new Date(bDay);
  return ~~((Date.now() - birthday) / (31557600000));
}
