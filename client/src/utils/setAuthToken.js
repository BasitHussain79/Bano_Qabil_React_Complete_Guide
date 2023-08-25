import axios from "axios";

const setAuthToken = () => {
  if (localStorage.token) {
    axios.defaults.headers.common["Authorization"] = localStorage.token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
