import React from "react";
import "./info.scss";

function Info({userProfile}) {
    return (
        userProfile.UserInfo &&
        <div className="info-container">
            <div className="d-flex my-4">
                <img src={require("../../assets/images/gender.png")} alt=""/>
                <div className="ms-4">
                    <p>{userProfile.UserInfo.gender ? "Nam" : "Nữ"}</p>
                    <span className="text">Giới tính</span>
                </div>
            </div>
            <div className="d-flex my-4">
                <img src={require("../../assets/images/birthday.png")} alt=""/>
                <div className="ms-4">
                    <p>{ userProfile.UserInfo.birthday? (new Date(userProfile.UserInfo.birthday)).toLocaleDateString() : ""}</p>
                    <span className="text">Ngày sinh</span>
                </div>
            </div>
            <div className="d-flex my-4">
                <img src={require("../../assets/images/location.png")} alt=""/>
                <div className="ms-4">
                    <p>{userProfile.UserInfo.address}</p>
                    <span className="text">Nơi sống</span>
                </div>
            </div>
            <div className="d-flex my-4">
                <img src={require("../../assets/images/email.png")} alt="" />
                <div className="ms-4">
                    <p>{userProfile.email}</p>
                    <span className="text">Email</span>
                </div>
            </div>
            <div className="d-flex my-4">
                <img src={require("../../assets/images/phone.png")} alt="" />
                <div className="ms-4">
                    <p>{userProfile.UserInfo.phone_number}</p>
                    <span className="text">Số điện thoại</span>
                </div>
            </div>
        </div>
    );
}

export default Info;
