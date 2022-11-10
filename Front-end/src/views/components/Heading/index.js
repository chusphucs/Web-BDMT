import { Grid, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import styles from "./style.module.scss";
import { Search } from "./Search";
import clsx from "clsx";

//TODO handle User Account
const userAccount = "Le Quoc Viet";

export const PageHeading = (props) => {
  return (
    <Grid container className={styles.PageHeading}>
      <Grid item width={"20%"}>
        <Typography className={styles.WebName}>Blog BDMT</Typography>
      </Grid>

      <Grid item width={"30%"} className={styles.Search}>
        <Search />
      </Grid>
      <Grid item width={"25%"} className={styles.IconNavbar}>
        <HomeIcon />
        <StoreRoundedIcon />
        <NotificationsActiveRoundedIcon />
      </Grid>
      <Grid
        item
        width={"25%"}
        className={clsx(styles.IconNavbar, styles.UserAccount)}
      >
        {userAccount && (
          <>
            <AccountCircleRoundedIcon />
            <Typography className={styles.Text}>{userAccount}</Typography>
          </>
        )}
        <LogoutRoundedIcon />
      </Grid>
    </Grid>
  );
};
