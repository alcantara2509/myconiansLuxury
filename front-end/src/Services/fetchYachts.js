/* eslint-disable consistent-return */
const baseURL = 'http://18.231.112.179:3001/yachts/';

export const fetchYachts = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();
  console.log(apiResponse);
  return apiResponse;
};

export const fetchYachtImages = async (name) => {
  if (name) {
    const apiRequest = await fetch(`${baseURL}${name}/`);
    const apiResponse = await apiRequest.json();
    return apiResponse;
  }
};
