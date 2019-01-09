import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e3ea784e017286a8d97cb4da7aadd844d279a8d1635c26ddb438d84a3dee887f"
  }
});
