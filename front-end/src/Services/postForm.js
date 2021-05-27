const baseURL = 'http://18.228.59.63:3001/form/';

const postForm = async (data) => {
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  };

  const apiRequest = await fetch(baseURL, postMethod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default postForm;
