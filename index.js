const get = require("./utils/getInflation"),
      getInflation = get.default,
      getInflationLimited = get.limited,
      constants = require("./constants"),
      prompt = require("prompt"),
      fs = require("fs");

let data = [];

prompt.start();
prompt.get(constants.SCHEMA, (err, res) => {
  if (err) {
    console.log("Error in prompt:", err);
    return;
  }

  // If there's an end date, a loop is necessary
  if (res.endMonth || res.endYEar) {

    // Loop through the years
    for (let year = +res.startYear; year <= +res.endYear; year++){

      // Loop through the months
      for (
        let month = (year === +res.startYear ? +res.startMonth : 1);
        month <= (year === +res.endYear ? +res.endMonth : 12);
        month++
      ) {

        getInflationLimited(res.baselineMonth, res.baselineYear, month, year, inflation => {

          const obj = {
            baselineMonth: +res.baselineMonth,
            baselineYear: +res.baselineYear,
            month,
            year,
            inflation
          }

          data.push(obj);

          console.log(obj);

          fs.writeFileSync("data.json", JSON.stringify(data));

        });

      }

    }

  }

  else {
    getInflation(res.baselineMonth, res.baselineYear, res.startMonth, res.startYear, inflation => {
      console.log(inflation);
    });    
  }
})

