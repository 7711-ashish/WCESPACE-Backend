import { create } from "apisauce";

const apiClient = create({
    // baseURL: "https://resource-tracker.onrender.com/api"
    baseURL : "http://localhost:5000/api"
});

export default apiClient;   
