import {
  Avatar,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Layout from "../../../components/layout";
import clsx from "clsx";
import styles from "./style.module.scss";

const UserInfoDataSample = {
  name: "Le Quoc Viet",
  avatar:
      "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/313859124_394183966156868_9183540491603074656_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4L-jJkHmkEQAX8YNYPE&_nc_ht=scontent.fhan14-1.fna&oh=03_AdT16K_YD19UAX2ljkQLU_zNYu4BEnOEiOGl_FLkgbLXhg&oe=639D2C60",
  gmail: "lequocviet@gmail.com",
  numberOfPost: "1000",
  numberOfCmt: "1000",
  numberOfLike: "1000",
};

export const PopupChangePassword = (props) => {
  const { open, onClose } = props;
  return (
      <Dialog open={open} onClose={onClose} className={styles.Popup}>
        <DialogTitle>Đổi mật khẩu</DialogTitle>
        <DialogContent>
          <TextField
              autoFocus
              id="name"
              label="Mật khẩu cũ"
              type="password"
              className={clsx(styles.ContentTextField, styles.TextFieldPopup)}
              fullWidth
          />
          <TextField
              autoFocus
              id="name"
              label="Mật khẩu mới"
              type="password"
              className={clsx(styles.ContentTextField, styles.TextFieldPopup)}
              fullWidth
          />
          <TextField
              autoFocus
              id="name"
              label="Nhập lại mật khẩu mới"
              type="password"
              className={clsx(styles.ContentTextField, styles.TextFieldPopup)}
              fullWidth
          />
        </DialogContent>
        <DialogActions className={styles.DialogActions}>
          <Button variant="contained" onClick={onClose} className={styles.Button}>
            Hủy
          </Button>
          <Button variant="contained" onClick={onClose} className={styles.Button}>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export const PopupEdit = (props) => {
  const { open, onClose } = props;
  return (
      <Dialog open={open} onClose={onClose} className={styles.Popup}>
        <DialogTitle>Thay đổi thông tin cá nhân</DialogTitle>
        <DialogContent>
          <Typography>Thông tin cá nhân của bạn sẽ được thay đổi ?</Typography>
        </DialogContent>
        <DialogActions className={styles.DialogActions}>
          <Button variant="contained" onClick={onClose} className={styles.Button}>
            Hủy
          </Button>
          <Button variant="contained" onClick={onClose} className={styles.Button}>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export function User() {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = () => {
    setOpenEdit(true);
  };

  const handleButtonChangePassword = () => {
    setOpenChangePassword(true);
    console.log("change pw");
  };
  const handleConfirmPassword = () => {
    setOpenChangePassword(false);
  };

  const handleClose = () => {
    setOpenChangePassword(false);
    setOpenEdit(false);
  };

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
                <Button variant="contained" className={styles.Button}>
                  Post List of User
                </Button>
                <Button
                    variant="contained"
                    className={styles.Button}
                    onClick={handleButtonChangePassword}
                >
                  Change password
                </Button>
                <PopupChangePassword
                    open={openChangePassword}
                    onClose={handleClose}
                    onConfirmPassword={handleConfirmPassword}
                />
                <Button
                    variant="contained"
                    className={styles.Button}
                    onClick={handleEdit}
                >
                  Edit
                </Button>
                <PopupEdit
                    open={openEdit}
                    onClose={handleClose}
                    onConfirmPassword={handleConfirmPassword}
                />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Layout>
  );
}

export default User;