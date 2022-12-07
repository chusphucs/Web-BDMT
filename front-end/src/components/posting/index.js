import React, { useState } from "react";
import { Input, Form } from "antd";
import useAuth from "../../hooks/useAuth";
import postApi from "../../api/postApi";
import "./posting.scss";

const { TextArea } = Input;
function Posting() {
    const { user } = useAuth()
    const [images, setImages] = useState([]);
    const [text, setText] = useState()

    const handleUploadImage = (e) => {
        var listsImage = images.slice();
        listsImage.push(URL.createObjectURL(e.target.files[0]));
        setImages(listsImage);
    };
    const handleSubmit = async () => {
        const newPost = {
            user_id: user.id,
            content: text,
        }
        await postApi.createNew(newPost)
        window.location.reload(false)
    };
    return (
        <Form className="posting-container" onFinish={handleSubmit}>
            <div className="posting-container__top">
                <img src={process.env.REACT_APP_API_URL + user.UserInfo.avatar} alt="" />
                <Form.Item name="text"  style={{ width: "100%" }}>
                    <TextArea
                        placeholder="Bạn đang nghĩ gì ?"
                        name="text"
                        autoSize={{ minRows: 1, maxRows: 15 }}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <label className="icon-image" for="image-input">
                        <img
                            src={require("../../assets/images/icon-image.png")}
                            alt=""
                        />
                    </label>
                </Form.Item>
            </div>
            <div
                className={
                    images.length !== 0 ? "posting-container__list-image" : ""
                }
            >
                {images.map((image) => (
                    <img className="image" src={image} alt="" />
                ))}
            </div>

            <input
                    id="image-input"
                    style={{ display: "none" }}
                    accept="image/png, image/jpeg"
                    type="file"
                    onChange={handleUploadImage}
                />
            <button type="submit" className="btn-green">
                Đăng bài
            </button>
        </Form>
    );
}
export default Posting;
