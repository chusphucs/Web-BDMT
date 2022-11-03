import React, {useState, useContext} from "react"
import style from '../login/style.css'
import bgLogin from '../../assets/images/bg-login.png'


function Login(props) {  
    return (
      <div className="container">
        <div className="form-image">
            <div className="image">
                    <img src={bgLogin}>
                    </img>
            </div>
            <div className="form">
                <div className="inner-form">
                    <p className="name-form">ログイン</p>
                    <p className="message">ログインして Bún đậu mắm tôm をお楽しみください。</p>
                      <form>
                          <input type={"text"} name = "username"  placeholder="メールアドレス"/>
                          <input type={"password"} name="password" placeholder="パスワード" />
                          <input type={"submit"} value="ログイン" className="button-submit"/>
                      </form>
                    <p className="message">パスワードを忘れた方は<a href="#">こちら</a></p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;