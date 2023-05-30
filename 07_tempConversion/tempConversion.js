const convertToCelsius = function(temp) {
  //Original solution before condensing to one line. Passed in "f" as argument.
  //let c;
  //c = (5 / 9 * (f - 32));
  //c = Math.round(c * 10) / 10;
  //return c;

  //Divide 5 by 9 while subtracting 32 from the original fahrenheit value.
  //Multiple the two results, this is the fahrenheit to celsius conversion.
  //Multiply the converted number by 10 and then run the number through Math.round().
  //Divide this result by 10 to complete rounding the number to 1 decimal place.
  temp = Math.round((5 / 9 * (temp - 32)) * 10) / 10;
  
  //Return the converted and rounded temperature value.
  return temp;
};

const convertToFahrenheit = function(temp) {
  //Original solution before condensing to one line. Passed in "c" as argument.
  //let f;
  //f = (9 / 5 * c) + 32;
  //f = Math.round(f * 10) / 10;
  //return f;

  //Divide 9 by 5 then multiple by the original celsius value.
  //Add 32 to the result, this is the celsius to fahrenheit conversion.
  //Multiply the converted number by 10 and then run the number through Math.round().
  //Divide this result by 10 to complete rounding the number to 1 decimal place.
  temp = Math.round((9 / 5 * temp + 32) * 10) / 10;
  
  //Return the converted and rounded temperature value.
  return temp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
