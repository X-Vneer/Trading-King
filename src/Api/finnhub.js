import axios from "axios";
const TOKEN = "cc92d0qad3i9n05jvoc0";
export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
