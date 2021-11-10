//import axios from "axios";
const BASE_URL = "http://localhost:4040/countries/";

export async function fetchCountries() {
  let response = await fetch(BASE_URL);
  let data = await response.json();
  //console.log(data);
  return data.map(({ id, name, iso3, phone_code, capital, currency }) => {
    const countries = { id, name, iso3, phone_code, capital, currency };
    //console.log(countries);
    return countries;
  });
}
