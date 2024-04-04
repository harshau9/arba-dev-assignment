import axios from "axios";

export const getApi = async (limit,filter) => {

  let url = "http://localhost:8080/products";
  if (filter) {
    url = `http://localhost:8080/products?categoryId=${filter}`;
  }else if (limit) {
    url = `http://localhost:8080/products?limit=8`;
  }
  try {
    console.log(url);
    const response = await axios.get(url);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
