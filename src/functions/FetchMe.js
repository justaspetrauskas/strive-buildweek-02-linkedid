// const API_Key = process.env.MAGDALENA_LINKEDIN_TOKEN;
const BASE_URL = "https://striveschool-api.herokuapp.com/api/profile/me";

// fetch(`https://awesome.api.io?api-key=${process.env.REACT_APP_SECRET_NAME}`)

export const FetchMe = async () => {
  try {
    const response = await fetch(`${BASE_URL}	`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1YzBiODdiZTZjMTAwMTVmOWRiOTAiLCJpYXQiOjE2MzA5MTI3NDIsImV4cCI6MTYzMjEyMjM0Mn0.byBIo7uNfJRP4-fpOCvFNWie1JMeMuhYXLce9wJEiIc",
      },
    });
    if (response.ok) {
      const user = await response.json();

      return user;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
