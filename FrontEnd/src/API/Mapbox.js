import Axios from "axios";

export const Location_Search = async (search) => {
  const mapboxToken = process.env.REACT_APP_MAP_TOKEN;
  const response = await Axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?country=IN&types=locality,district&access_token=${mapboxToken}`
  );
  return response.data.features;
};
