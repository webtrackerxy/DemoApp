import { create } from "apisauce";

const apiClient = create({
  //baseURL: "http://192.168.1.213:9000/api",
  baseURL: "https://my-json-server.typicode.com/benirvingplt/products/",
});


export default apiClient;
