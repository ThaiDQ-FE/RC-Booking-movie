import UserManage from "../components/role/user";
import MovieManage from "../components/role/movie";
import AdminRole from "../pages/Admin-Role";
import CheckOut from "../pages/Default-Role/Check-Out";
import MovieDetail from "../pages/Default-Role/Detail";
import HomePage from "../pages/Default-Role/Home";
import LoginRegister from "../pages/Default-Role/LoginRegister";
import MovieAll from "../pages/Default-Role/Movie-All";
import SeatPlan from "../pages/Default-Role/Seat-Plan";
import TicketPlan from "../pages/Default-Role/Ticket-Plan";

export const defaultRounter = [
  {
    path: "/",
    exact: true,
    Component: <HomePage />,
  },
  {
    path: "/movie-all",
    exact: true,
    Component: <MovieAll />,
  },
  {
    path: "/movie-detail/:maPhim",
    exact: true,
    Component: <MovieDetail />,
  },
  {
    path: "/ticket-plan/:maPhim",
    exact: true,
    Component: <TicketPlan />,
  },
  {
    path: "/seat-plan/:maLichChieu",
    exact: true,
    Component: <SeatPlan />,
  },
  {
    path: "/dang-nhap",
    exact: true,
    Component: <LoginRegister />,
  },
  {
    path: "thanh-toan",
    exact: true,
    Component: <CheckOut />,
  },
  {
    path: "/admin",
    exact: true,
    Component: <AdminRole>{<UserManage />}</AdminRole>,
  },
  {
    path: "/admin/quan-ly-phim",
    exact: true,
    Component: <AdminRole>{<MovieManage />}</AdminRole>,
  },
];
