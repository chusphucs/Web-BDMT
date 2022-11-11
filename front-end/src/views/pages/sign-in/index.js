import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { messages } from "../../../assets/lang/messages";
import "./sign-in.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn() {
    const [inputEmailState, setInputEmailState] = useState(false);
    const [inputUsernameState, setInputUsernameState] = useState(false);
    const [inputPasswordState, setInputPasswordState] = useState(false);
    const [inputPasswordConfirmState, setInputPasswordConfirmState] =
        useState(false);

    const onFinish = (values) => {};

    return (
        <div className="sign-in-container">
            <div className="sign-in-container__content">
                <h1>サインイン</h1>
                <Form className="mt-5" onFinish={onFinish}>
                    <div
                        className={
                            inputEmailState
                                ? "sign-in-container__content__item active"
                                : "sign-in-container__content__item"
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
                            inputUsernameState
                                ? "sign-in-container__content__item active"
                                : "sign-in-container__content__item"
                        }
                    >
                        <UserOutlined className="icon" />
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: messages["text_required"],
                                },
                            ]}
                        >
                            <Input
                                className="input"
                                placeholder="Username"
                                onFocus={() => setInputUsernameState(true)}
                                onBlur={() => setInputUsernameState(false)}
                            />
                        </Form.Item>
                    </div>
                    <div
                        className={
                            inputUsernameState
                                ? "sign-in-container__content__item active"
                                : "sign-in-container__content__item"
                        }
                    >
                        <SettingOutlined className="icon" />
                        <Form.Item
                            name="role"
                        >
                            <select name="role" className="select-box">
                                <option value="Reviewer">Reviewer</option>
                                <option value="Store Owner">Store Owner</option>
                            </select>
                        </Form.Item>
                    </div>
                    <div
                        className={
                            inputPasswordState
                                ? "sign-in-container__content__item active"
                                : "sign-in-container__content__item"
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
                    <div
                        className={
                            inputPasswordConfirmState
                                ? "sign-in-container__content__item active"
                                : "sign-in-container__content__item"
                        }
                    >
                        <LockOutlined className="icon" />
                        <Form.Item
                            name="comfirm-password"
                            dependencies={["password"]}
                            rules={[
                                {
                                    required: true,
                                    message: messages["text_required"],
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (
                                            !value ||
                                            getFieldValue("password") === value
                                        ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error(
                                                messages[
                                                    "confirm_password_not_match"
                                                ]
                                            )
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                className="input"
                                placeholder="Confirm password"
                                onFocus={() =>
                                    setInputPasswordConfirmState(true)
                                }
                                onBlur={() =>
                                    setInputPasswordConfirmState(false)
                                }
                            />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="btn-submit mt-4 mb-3"
                        >
                            サインイン
                        </Button>
                    </Form.Item>
                    <a href="/sign-up" className="text-center ">
                        すでにアカウントをお持ちですか？ サインイン
                    </a>
                </Form>
            </div>
        </div>
    );
}

export default SignIn;
