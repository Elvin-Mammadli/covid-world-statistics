import { getData } from "api";
import { useState, useEffect, createContext } from "react";
import { getCountryData, getOptions, getTotalCases } from "utils";


export const MyContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState('AZE');
  const [options, setOptions] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [totalCases, setTotalCases] = useState([])
  const [period, setPeriod] = useState(7);
  const [chartType, setChartType] = useState('Line');
  const [statisticsType, setStatisticsType] = useState('new')

  const readyDataObject = {
    data,
    country,
    options,
    countryData,
    setCountry,
    totalCases,
    setTotalCases,
    period,
    setPeriod,
    chartType,
    setChartType,
    statisticsType,
    setStatisticsType
  }

  useEffect(() => {
    if (!data) {
      // getData()
      //   .then(res => setData(res));
    } else {
      statisticsType === 'new' ? setCountryData(getCountryData(data, country, period)) :
      setTotalCases(getTotalCases(data, country));

      setOptions(getOptions(data));
    }
  }, [data, country, period, statisticsType])


  return (
    <MyContext.Provider value={readyDataObject}>
      {children}
    </MyContext.Provider>
  );
};