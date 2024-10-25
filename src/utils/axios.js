import axios from "axios";
const accessToken = process.env.REACT_APP_THEMOVIEDB_ACCESS_TOKEN

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default axiosInstance;
