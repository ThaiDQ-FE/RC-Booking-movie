import axiosClient from "./aixosClient";
const baseUrl = "https://movie0706.cybersoft.edu.vn/api";
const manageUrl = "/QuanLyPhim";
const rapUrl = "/QuanLyRap";
const manageBooking = "/QuanLyDatVe";
const movieAPI = {
  getListMovie: () => {
    const url = baseUrl + manageUrl + "/LayDanhSachPhim?maNhom=GP03";
    return axiosClient.get(url);
  },
  getInformationOfMovie: (params) => {
    const url = baseUrl + rapUrl + `/LayThongTinLichChieuPhim?MaPhim=${params}`;
    return axiosClient.get(url, { params });
  },
  getInformationShowTimes: (params) => {
    const url = baseUrl + rapUrl + `/LayThongTinLichChieuPhim?MaPhim=${params}`;
    return axiosClient.get(url, { params });
  },
  getInformationShowTimeSchedule: (params) => {
    console.log(params);
    const url =
      baseUrl + manageBooking + `/LayDanhSachPhongVe?MaLichChieu=${params}`;
    return axiosClient.get(url, { params });
  },
};

export default movieAPI;
