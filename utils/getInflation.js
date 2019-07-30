const rateLimit = require("./rateLimit.js"),
      scrape = require("jquery-scrape"),
      leftpad = require("leftpad");

const getInflationLimited = rateLimit(getInflation, 1000);

function getInflation(baselineMonth, baselineYear, month, year, callback){
  scrape(`https://data.bls.gov/cgi-bin/cpicalc.pl?cost1=1.00&year1=${validateYear(year)}${validateMonth(month)}&year2=${validateYear(baselineYear)}${validateMonth(baselineMonth)}`, $ => {
    callback(+$("#answer").text().trim().replace("$", ""))
  });
}

// month is a string
function validateMonth(month){
  if (+month > 12 || +month < 1 || !Number.isInteger(+month)) {
    return new Error("Month must be an integer between 1 and 12.");
  }

  else {
    return leftpad(month, 2);
  }
}

function validateYear(year){
  if (+year < 1000 || +year > 9999 || !Number.isInteger(+year)) {
    return new Error("Year must be an integer between 1000 and 9999.");
  }

  else {
    return year;
  }
}

module.exports = {
  limited: getInflationLimited,
  default: getInflation 
}