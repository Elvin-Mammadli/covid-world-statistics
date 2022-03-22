// this function returns stats of last 'period'-(number) days
export const getCountryData = (data, country, period) => {
  const selectedCountryObj = data[country];
  const timePeriod = selectedCountryObj.data.slice(-period)
  let newCases = timePeriod.map(item => item.new_cases)
  let newDeaths = timePeriod.map(item => item.new_deaths)
  let dates = timePeriod.map(item => item.date)
  return { newCases, newDeaths, dates }
}

// this function gets 'Autocomplete' country list
export const getOptions = data => {
  let options = [];
  for (let keys in data) {
    let obj = { value: keys, label: data[keys].location }
    options.push(obj);
  }
  return options;
}

export const getTotalCases = (input, country) => {
  const { location, data } = input[country];
  const totalDeaths = data[data.length - 1].total_deaths;
  const totalNewCases = data[data.length - 1].total_cases;
  return { location, totalNewCases, totalDeaths }
};