/* eslint-disable consistent-return */
const baseURL = 'http://18.231.112.179:3001/villas/';

export const fetchVillas = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export const fetchVillaImages = async (name) => {
  if (name) {
    const apiRequest = await fetch(`${baseURL}${name}/`);
    const apiResponse = await apiRequest.json();
    return apiResponse;
  }
};
