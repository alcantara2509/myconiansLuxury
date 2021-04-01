const baseURL = 'http://localhost:3001/villas/';

export const fecthVillas = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export const fecthVillasImages = async (name) => {
  const apiRequest = await fetch(`${baseURL}${name}/`);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};
