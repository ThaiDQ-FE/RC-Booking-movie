import axiosClient from "./aixosClient";
const baseUrl = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung";
const userAPI = {
  postLogin: (params) => {
    const url = baseUrl + "/DangNhap";
    return axiosClient.post(url, { params });
  },
  postRegister: (params) => {
    const url = baseUrl + "/DangKy";
    return axiosClient.post(url, { params });
  },
};

export default userAPI;
