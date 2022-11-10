import DashboardIcon from "@mui/icons-material/Dashboard";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export const menus = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <HomeIcon />,
    title: "Home",
    path: "/",
  },
  {
    icon: <EditIcon />,
    title: "Post approval",
    path: "/postApproval",
  },
  {
    icon: <PersonRoundedIcon />,
    title: "User",
    path: "/user",
  },
  {
    icon: <StoreIcon />,
    title: "Store",
    path: "/store",
  },
  {
    icon: <LogoutRoundedIcon />,
    title: "Logout",
    path: "/logout",
  },
];
