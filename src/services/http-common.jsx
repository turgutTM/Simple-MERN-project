import axios from "axios";
export default axios.create({
  baseURL: "/venues.json",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
});
