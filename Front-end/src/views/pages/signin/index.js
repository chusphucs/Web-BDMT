import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import React from "react";
import bgLogin from "../../../assets/images/bgLogin.jpg";
import styles from "./style.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignInSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = (data) => {
    //TODO handle API
    console.info(data);
  };

  const onError = (errors) => {
    //TODO handle API
    console.error(errors);
  };

  return (
    <div className={styles.LoginForm}>
      <img src={bgLogin} className={styles.imgBackground} alt="" />
      <div className={styles.containerLogin}>
        <div className={styles.wrapLogin}>
          <Box className={styles.loginForm}>
            <Typography
              className={clsx(styles.loginFormTitle, styles.Headline1)}
            >
              Đăng nhập
              <Typography
                className={clsx(styles.loginFormSubTitle, styles.Body2)}
              >
                ログインして Bún đậu mắm tôm をお楽しみください。
              </Typography>
            </Typography>
            <form
              className={styles.Form}
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div className={styles.Input}>
                <input
                  {...register("username")}
                  type={"text"}
                  name="username"
                  placeholder="メールアドレス"
                />
                {errors.username && (
                  <Typography className={styles.ErrorMessage}>
                    Hãy nhập tên đăng nhập nha cđ
                  </Typography>
                )}
              </div>
              <div className={styles.Input}>
                <input
                  {...register("password")}
                  type={"password"}
                  name="password"
                  placeholder="パスワード"
                />
                {errors.password && (
                  <Typography className={styles.ErrorMessage}>
                    Hãy nhập password nha cđ
                  </Typography>
                )}
              </div>
              <input
                name="submit"
                type="submit"
                value={"Đăng nhập"}
                className={styles.btnLogin}
              />
            </form>
            <Typography
              className={clsx(styles.loginFormSignIn, styles.Headline1)}
            >
              パスワードを忘れた方はこちら
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}
