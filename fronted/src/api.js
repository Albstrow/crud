import axios from "axios";

const API_URL = "https://vishalecom.pythonanywhere.com/api/products/";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};
