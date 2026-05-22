import axios from "axios";

const customFetch = () => {
  const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
  return axios.create({
    baseURL: "https://devlinks-api-1g68.onrender.com",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": `Bearer ${accessToken}`
    },
    withCredentials: true,
  });
}

export default customFetch;