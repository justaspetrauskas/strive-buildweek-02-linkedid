// const API_Key = process.env.MAGDALENA_LINKEDIN_TOKEN;
const BASE_URL =
  "https://striveschool-api.herokuapp.com/api/profile/6136631a7be6c10015f9dbd5";

// fetch(`https://awesome.api.io?api-key=${process.env.REACT_APP_SECRET_NAME}`)

export const FetchMe = async () => {
  try {
    const response = await fetch(`${BASE_URL}	`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2NjMxYTdiZTZjMTAwMTVmOWRiZDUiLCJpYXQiOjE2MzA5NTQyNjYsImV4cCI6MTYzMjE2Mzg2Nn0.HogYsweMAQUpppsrUiwowbIdCFQ7dOSSLbEGyxsl5IQ",
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
