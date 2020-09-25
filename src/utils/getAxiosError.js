const getAxiosError = (error) => {
  let errorMessage;

  if (error.response) {
    errorMessage = error.response.data.message;
  } else if (error.request) {
    errorMessage = 'something went wrong try later';
  } else {
    errorMessage = error.message;
  }

  return errorMessage;
};

export default getAxiosError;
