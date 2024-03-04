// import React from "react";
import styles from "./styles.module.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeFilledIcon from "@mui/icons-material/HomeRounded";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import NotificationsFilledIcon from "@mui/icons-material/Notifications";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsNone";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CalendarMonthFilledIcon from "@mui/icons-material/CalendarMonth";

const options: IOption[] = [
  {
    label: "Home",
    value: "home",
    link: "/",
    icon: <HomeOutlinedIcon />,
    iconActive: <HomeFilledIcon />,
  },
  {
    label: "Booking",
    value: "booking",
    link: "/booking",
    icon: <CalendarMonthOutlinedIcon />,
    iconActive: <CalendarMonthFilledIcon />,
  },
  {
    label: "Cars",
    value: "cars",
    link: "/cars",
    icon: <DirectionsCarOutlinedIcon />,
    iconActive: <DirectionsCarFilledIcon />,
  },
  {
    label: "Alerts",
    value: "alerts",
    link: "/alerts",
    icon: <NotificationsOutlinedIcon />,
    iconActive: <NotificationsFilledIcon />,
  },
];

// const NavBar: React.FC<{}> = () => {
//   const router = useRouter();

//   return (
//     <div className={styles.root}>
//       <div className={styles.container}>
//         <div className={styles.left}>
//           <Image
//             className={styles.logo}
//             alt="Logo"
//             src="/img/logo-2.svg"
//             width={170}
//             height={28}
//           />
//         </div>
//         <div className={styles.mid}>
//           {options.map((option) => (
//             <div
//               key={option.value}
//               className={styles.wrapper}
//               onClick={() => router.push(`/${option.value}`)}
//             >
//               <Image
//                 className={styles.img}
//                 alt={option.label}
//                 src={option.icon}
//                 width={24}
//                 height={24}
//               />
//               <div className={styles.text}>{option.label}</div>
//             </div>
//           ))}
//         </div>
//         <div className={styles.right}>
//           <Image
//             className={styles.img}
//             alt="Account"
//             src="/img/frame-5271-2.png"
//             width={24}
//             height={24}
//           />
//           <div className={styles.text}>Account</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import { useAuth } from "@contexts/authContext";
import { useRouter } from "next/router";

const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { userData, login, logout } = useAuth();

  const handleLogin = () => {
    // login();
    router.push("/signin");
  };

  const handleLogout = () => {
    logout();
  };

  const settings: ISettings[] = [
    {
      name: "Profile",
      onClick: () => {
        router.push("/account");
      },
    },
    {
      name: "Account",
    },
    {
      name: "Dashboard",
    },
    {
      name: "Logout",
      onClick: handleLogout,
    },
  ];

  const router = useRouter();
  const route = "/" + router.pathname.split("/")[1];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (option?: IOption) => {
    setAnchorElNav(null);
    if (option) {
      router.push(option.link);
    }
  };

  const handleCloseUserMenu = (setting: ISettings) => {
    setAnchorElUser(null);
    setting?.onClick && setting.onClick();
  };

  return (
    // <div className={styles.root}></div>
    <Box
      sx={{
        borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(153, 223, 255, 1)",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#008BCC",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            {/* Small Screen */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseNavMenu()}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu()}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <Image alt="Logo" src="/img/logo-2.svg" width={170} height={28} />
            </Box>

            {/* Large Screen */}

            <Box sx={{ display: { xs: "none", md: "flex" }, padding: "" }}>
              <Image alt="Logo" src="/img/logo-2.svg" width={170} height={28} />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 4,
              }}
            >
              {options.map((option, i) => (
                <Button
                  key={i}
                  onClick={() => handleCloseNavMenu(option)}
                  sx={{
                    my: 1,
                    color: "white",
                    display: "block",
                    margin: 0,
                    paddingBottom: 0,
                  }}
                >
                  {/* <div
                  key={option.value}
                  className={styles.wrapper}
                  onClick={() => router.push(`/${option.value}`)}
                > */}
                  {route === option.link ? option.iconActive : option.icon}
                  {/* <Image
                    // className={styles.img}
                    alt={option.label}
                    src={option.icon}
                    width={24}
                    height={24}
                  /> */}
                  <div className={""}>{option.label}</div>
                  {/* </div> */}
                  {route === option.link && (
                    <hr
                      style={{
                        border: "1px solid white",
                        margin: 0,
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {userData ? (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/img/frame-5271-2.png" />
                  </IconButton>
                </Tooltip>
              ) : (
                <p
                  style={{
                    fontFamily: "Arial",
                    fontWeight: 700,
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={handleLogin}
                >
                  Login
                </p>
              )}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;

interface ISettings {
  name: string;
  onClick?: () => void;
}

interface IOption {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  link: string;
}
