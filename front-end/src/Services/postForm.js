const baseURL = 'https://api.myconianluxury.com/form/';

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
