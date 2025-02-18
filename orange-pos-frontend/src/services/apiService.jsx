import axios from "axios";

// ตั้งค่า API Base URL
const API_BASE_URL = "https://fakestoreapi.com/";

// ดึง Token จาก LocalStorage
const getToken = () => localStorage.getItem("accessToken");

// สร้างอินสแตนซ์ของ Axios
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// **Interceptor สำหรับแนบ Token อัตโนมัติ**
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// **Interceptor จัดการ Error และ Refresh Token อัตโนมัติ**
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Token may be expired.");
      // ลอง Refresh Token ถ้ามีระบบ Refresh Token
    }
    return Promise.reject(error);
  }
);

// **สร้างฟังก์ชัน Fetch API**
const apiService = {
  get: async (path, params = {}, headers = {}) => {
    try {
      const response = await axiosInstance.get(path, { params, headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  post: async (path, body = {}, headers = {}) => {
    try {
      const response = await axiosInstance.post(path, body, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  put: async (path, body = {}, headers = {}) => {
    try {
      const response = await axiosInstance.put(path, body, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  delete: async (path, headers = {}) => {
    try {
      const response = await axiosInstance.delete(path, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  setToken: (token) => {
    localStorage.setItem("accessToken", token);
  },

  removeToken: () => {
    localStorage.removeItem("accessToken");
  },
};

// **ฟังก์ชันจัดการ Error**
const handleError = (error) => {
  console.error("API Error:", error.response?.data || error.message);
  return { error: error.response?.data || "Something went wrong" };
};

export default apiService;
