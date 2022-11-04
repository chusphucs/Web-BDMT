import React, {useState, useContext} from "react"
import bgLogin from '../../../assets/images/bg-login.png'
import './signin.css'

function Signin(props) {
    return (
      <div className="container">
        <div className="form-image">
            <div className="image">
                    <img src={bgLogin}>
                    </img>
            </div>
            <div className="form">
                <div className="inner-form">
                    <p className="name-form">サインアップ</p>
              
                    <p className="message">アカウントを作成して Bún đậu mắm tôm をお楽しみください。</p>
                      <form>
                          <input type={"text"} name="uname" placeholder="メールアドレス"/>
                          <input type={"password"} name="pass" placeholder="パスワード"/>
                          <input type={"submit"} value="サインアップ" className="button-submit"/>
                      </form>
                    <p className="message">すでにアカウントをお持ちですか？<a href="#">ログイン</a></p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Signin;