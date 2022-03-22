import axios from "axios";

export const getData = () => axios.get("https://covid.ourworldindata.org/data/owid-covid-data.json")
  .then(res => res.data)