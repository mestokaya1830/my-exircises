import ax from "axios";

export default axios = ax.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-type": "application/json"
  }
});