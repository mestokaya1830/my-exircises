import ax from "axios";

export const axios = ax.create({
  baseURL: "http://localhost:5173/api",
  headers: {
    "Content-type": "application/json"
  }
});