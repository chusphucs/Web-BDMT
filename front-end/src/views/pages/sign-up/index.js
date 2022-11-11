import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { messages } from "../../../assets/lang/messages";
import "./sign-up.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  const [inputEmailState, setInputEmailState] = useState(false);
  const [inputPasswordState, setInputPasswordState] = useState(false);

    const onFinish = (values) => {
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-container__content">
                <h1>サインアップ</h1>
                <Form
                    className="mt-5"
                    onFinish={onFinish}
                >
                    <div
                        className={
                            inputEmailState
                                ? "sign-up-container__content__item active"
                                : "sign-up-container__content__item"
                        }
                    >
                        <MailOutlined className="icon" />
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: messages["text_required"],
                                },
                                {
                                    type: "email",
                                    message: messages["invalid_email"],
                                },
                            ]}
                        >
                            <Input
                                className="input"
                                placeholder="Email"
                                onFocus={() => setInputEmailState(true)}
                                onBlur={() => setInputEmailState(false)}
                            />
                        </Form.Item>
                    </div>
                    <div
                        className={
                            inputPasswordState
                                ? "sign-up-container__content__item active"
                                : "sign-up-container__content__item"
                        }
                    >
                        <LockOutlined className="icon" />
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: messages["text_required"],
                                },
                                {
                                    type: "string",
                                    min: 6,
                                    max: 24,
                                    message:
                                        messages["invalid_password_length"],
                                },
                            ]}
                        >
                            <Input.Password
                                className="input"
                                placeholder="Password"
                                onFocus={() => setInputPasswordState(true)}
                                onBlur={() => setInputPasswordState(false)}
                            />
                        </Form.Item>
                    </div>
                    <label className="mt-3">パスワードをお忘れですか?</label>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="btn-submit my-3"
                        >
                            サインアップ
                        </Button>
                    </Form.Item>
                    <a href="/sign-in" className="text-center ">
                      新しいアカウントを作成する
                    </a>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;
