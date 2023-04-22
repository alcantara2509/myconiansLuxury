/* eslint-disable consistent-return */
const baseURL = "https://api.myconianluxury.com/yachts/";

export const fetchYachts = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export const fetchYachtImages = async (name) => {
  if (name) {
    const apiRequest = await fetch(`${baseURL}${name}/`);
    const apiResponse = await apiRequest.json();
    return apiResponse;
  }
};
