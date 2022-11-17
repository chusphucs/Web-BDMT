import {
  Avatar,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../../../components/layout";
import styles from "./style.module.scss";

const UserInfoDataSample = {
  name: "Le Quoc Viet",
  avatar:
    "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/313818157_1136857167223236_7710827571620932533_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eiMBwEtW7L8AX-DN9JZ&tn=EMqxhvS4VEbwuPCR&_nc_ht=scontent.fdad2-1.fna&oh=03_AdQ3sLWXVS2YMyWeRSm0ueuc2lR7YYbJ3cPJkf8hirvesQ&oe=6393C1A7",
  gmail: "lequocviet@gmail.com",
  numberOfPost: "1000",
  numberOfCmt: "1000",
  numberOfLike: "1000",
};

console.log(UserInfoDataSample);

export const User = () => {
  console.log(UserInfoDataSample.name);
  return (
    <Layout>
      <Grid container className={styles.Container}>
        <Grid item className={styles.ContentLeft} width={"30%"}>
          <Avatar
            alt={UserInfoDataSample.name}
            src={UserInfoDataSample.avatar}
            className={styles.AvatarUser}
          />
          <div className={styles.InfoUser}>
            <Typography className={styles.Name} noWrap>
              {UserInfoDataSample.name}
            </Typography>
            <div className={styles.ExtraInfoUser}>
              <Typography>
                Number Of Post: {UserInfoDataSample.numberOfPost}
              </Typography>
              <Typography>
                Number Of Cmt: {UserInfoDataSample.numberOfCmt}
              </Typography>
              <Typography>
                Number Of Like: {UserInfoDataSample.numberOfLike}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item className={styles.ContentRight} width={"70%"}>
          <Card
            component="form"
            noValidate
            autoComplete="off"
            className={styles.CardInfo}
          >
            <Typography className={styles.Title} noWrap>
              THÔNG TIN NGƯỜI DÙNG
            </Typography>

            <div>
              <Typography className={styles.TitleTextField}>Tên</Typography>
              <TextField
                id="name"
                className={styles.ContentTextField}
                defaultValue="Le Quoc Viet"
              />
              <Typography className={styles.TitleTextField}>
                Điện thoại
              </Typography>
              <TextField
                id="phone"
                className={styles.ContentTextField}
                defaultValue="lequocviet@gmail.com"
              />
              <Typography className={styles.TitleTextField}>Email</Typography>
              <TextField
                id="email"
                className={styles.ContentTextField}
                defaultValue="0123456789"
              />
            </div>
            <div className={styles.ButtonContainer}>
              <Button variant="contained" noWrap className={styles.Button}>
                Post List of User
              </Button>
              <Button variant="contained" noWrap className={styles.Button}>
                Delete
              </Button>
              <Button variant="contained" noWrap className={styles.Button}>
                Ban/UnBan
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};
