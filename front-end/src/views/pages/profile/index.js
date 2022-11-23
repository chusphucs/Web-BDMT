import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../../components/layout";
import Info from "../../../components/info"
import EditProfile from "../../../components/edit-profile";
import userApi from "../../../api/userApi"
import useAuth from "../../../hooks/useAuth";
import * as defaultImageUrl from "../../../shared/constants/defaultImageUrl"
import "./profile.scss";
const INFO_TAB = 1;
const POST_TAB = 2;
function Profile() {
    const {user} = useAuth()
    const [userProfile, setUserProfile] = useState({})
    const [tab, setTab] = useState(INFO_TAB);
    const [isModalOpen, setisModalOpen] = useState(false);
    useEffect( () => {
        userApi.getUserById(user.id).then((response) => {
            setUserProfile(response.data);
        })
    }, [])
    const handleOpenModal = (state) => {
        setisModalOpen(state);
    };
    return (
        userProfile &&
        <Layout>
            <div className="profile-container col-8">
                <div className="profile-container__top">
                    <img 
                        src={process.env.REACT_APP_API_URL+userProfile?.UserInfo?.avatar} 
                        alt=""
                        onError={(e)=>{
                            e.target.onerror = null; 
                            e.target.src=defaultImageUrl.USER_AVATAR
                        }}  
                    />
                    <div className="mt-auto ms-4">
                        <h2>{userProfile.name}</h2>
                        <div className="button"><button onClick={() => handleOpenModal(true)}>Chỉnh sửa</button> </div>
                        <EditProfile
                            isModalOpen={isModalOpen}
                            handleOpenModal={handleOpenModal}
                            userProfile={userProfile}
                        />
                    </div>
                </div>
                <div className="line"></div> 
                <div className="profile-container__content">
                    <div className="profile-container__content__tab col-3">
                        <button
                            className={tab === INFO_TAB && "active"}
                            onClick={() => setTab(INFO_TAB)}
                        >
                            Thông tin
                        </button>
                        <button
                            className={tab === POST_TAB && "active"}
                            onClick={() => setTab(POST_TAB)}
                        >
                            Bài viết
                        </button>
                    </div>
                    <div className="col-9 mb-5">
                        {/* {tab === POST_TAB &&
                            listPosts.length>0 &&
                            listPosts.filter((post) => post.user._id === userId)
                                .map((post) => <Post post={post} />)} */}
                        {tab === INFO_TAB && <Info userProfile={userProfile}/>}
                            
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Profile
