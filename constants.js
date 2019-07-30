const SCHEMA = {
  properties: {
    baselineMonth: {
      message: "Baseline month (1 = Jan, ..., 12 = Dec)",
      required: true
    },
    baselineYear: {
      message: "Baseline year",
      required: true
    },
    startMonth: {
      message: "Start month (1 = Jan, ..., 12 = Dec)",
      required: true
    },
    startYear: {
      message: "Start year",
      required: true
    },
    endMonth: {
      message: "End month (1 = Jan, ..., 12 = Dec)",
      required: false
    },
    endYear: {
      message: "End year",
      required: false
    }
  }
};

module.exports = {
  SCHEMA
};