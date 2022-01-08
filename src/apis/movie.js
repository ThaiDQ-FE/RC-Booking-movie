import axiosClient from "./aixosClient";
const baseUrl = "https://movie0706.cybersoft.edu.vn/api";
const manageUrl = "/QuanLyPhim";
const movieAPI = {
  getListMovie: () => {
    const url = baseUrl + manageUrl + "/LayDanhSachPhim?maNhom=GP01";
    return axiosClient.get(url);
  },
};

export default movieAPI;
