import React, { useState, useRef } from "react";
import { Carousel, Input, Tooltip ,Menu, Dropdown, Modal} from "antd";
import { LikeOutlined, LikeFilled,EllipsisOutlined ,DeleteOutlined,EditOutlined} from "@ant-design/icons";
import Comment from "../../components/comment";
import { listPostsImages } from "../../utils";
import { getDateTime } from "../../helpers/formatDate";
import "./post.scss";
const { TextArea } = Input;
function Post({ post }) {
    const slider = useRef();
    const [showComment, setShowComment] = useState(false);
    const [showModalEdit,setShowModalEdit] = useState(false);
    const [showModalDelete,setShowModalDelete] = useState(false);

    const handleIconEdit = () =>{
        setShowModalEdit(true)
    }

    const handleCancel = () => {
        setShowModalEdit(false)
    }
    const handleIconDelete = () =>{
        setShowModalDelete(true)
    }
    const handleCancelDelete = () => {
        setShowModalDelete(false)
    }

    const menu = () => {    
        return (
            <Menu className="dropdown">
                <Menu.Item className="drop-item" key="1" onClick={handleIconEdit}>
                <EditOutlined />
                    <p>Edit</p>
                </Menu.Item>
                <Menu.Item  className="drop-item" key="2" onClick={handleIconDelete}>
                <DeleteOutlined /> <p>Delete</p>
                </Menu.Item>
              
            </Menu>
        )
    }

    return (
        <div className="post-container">
            <div className="post-content">
            <Modal
                    className="popup"
                    visible={showModalEdit}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <div className="popup-inner">
                        <div className="create-post-header">
                        <h2 className="text-header">Edit Post</h2>

                        </div>

                        <div className="post-content__header-avt">
                            <div className="shape-circle">
                                <img
                                    className="img-circle"
                                    style={{ width: "50px", height: "50px" }}
                                    alt=""
                                    src={process.env.REACT_APP_API_URL + post.User.UserInfo?.avatar}
                                />
                            </div>
                            
                            <div className="ms-3">
                                <a className="user-name" href="/">
                                    {post.User.name}
                                </a>
                                <br />
                                <span>{getDateTime(post.createdAt)}</span>
                            </div>
                       </div>
                       <div className="create-post-body">
                        <textarea className="content mt-2" rows="20" cols="70" >{post.content}</textarea>
                        </div>
                        <div>                            
                        </div>
                        <div className="submit" >
                        <button className="btn-save">Save</button>
                        </div>
                    </div>
                </Modal>

                {/* Delete */}
                <Modal
                    className="popup"
                    visible={showModalDelete}
                    onCancel={handleCancelDelete}
                    footer={null}
                >
                    <div className="popup-inner">
                        <div className="create-post-header">
                        <h2 className="text-header">Delete your Post?</h2>
                        </div>
                        <div className="btn">
                            <button className="del-btn" >Delete</button>
                            <button className="can-btn" onClick={handleCancelDelete}>Cancel</button>
                        </div>
                    </div>
                </Modal>

                <div className="mx-3">
                    <div className="d-flex align-items-center post-content__header">
                       <div className="post-content__header-avt">
                            <div className="shape-circle">
                                <img
                                    className="img-circle"
                                    style={{ width: "50px", height: "50px" }}
                                    alt=""
                                    src={process.env.REACT_APP_API_URL + post.User.UserInfo?.avatar}
                                />
                            </div>
                            
                            <div className="ms-3">
                                <a className="user-name" href="/">
                                    {post.User.name}
                                </a>
                                <br />
                                <span>{getDateTime(post.createdAt)}</span>
                            </div>
                       </div>

                        <div className="post-content__header-icon-edit">
                        <Dropdown overlay={menu} trigger="click">
                            <label
                                className="header-right__content"
                                onClick={(e) => e.preventDefault()}
                            >
                                <EllipsisOutlined/>
                            </label>
                        </Dropdown>
                         
                        </div>
                    </div>
                    <p className="mt-2">{post.content}</p>
                </div>
                <div className="position-relative">
                    <Carousel
                        className="post-container__list-images"
                        ref={(ref) => {
                            slider.current = ref;
                        }}
                    >
                        {listPostsImages.map((image) => (
                            <img alt="" src={image} />
                        ))}
                    </Carousel>
                    <div
                        className="post-container__list-images__btn-prev"
                        onClick={() => slider.current.prev()}
                    >
                        <img
                            alt=""
                            src={require("../../assets/images/btn-prev.png")}
                        />
                    </div>
                    <div
                        className="post-container__list-images__btn-next"
                        onClick={() => slider.current.next()}
                    >
                        <img
                            alt=""
                            src={require("../../assets/images/btn-next.png")}
                        />
                    </div>
                </div>
                <div className="post-container__bottom mx-3 mt-2">
                    <div className="d-flex align-item-center">
                        {post.numberOfLike > 0 && (
                            <Tooltip
                                title={() =>
                                    post.listToolTips.map((item) => (
                                        <>
                                            {item}
                                            <br />
                                        </>
                                    ))
                                }
                                style={{
                                    cursor: "pointer",
                                    whiteSpace: "pre-wrap",
                                }}
                                className="underline"
                            >
                                <img
                                    className="img-circle"
                                    style={{ width: "20px" }}
                                    src={require("../../assets/images/like.png")}
                                    alt=""
                                />
                                <span className="ms-2">
                                    {/* {post.numberOfLike} */}
                                    2
                                </span>
                            </Tooltip>
                        )}
                        {/* {post.commentsOfPost.length > 0 && ( */}
                            <div className="ms-auto underline">
                                <span onClick={() => setShowComment(true)}>
                                    {/* {post.commentsOfPost.length + 1} bình luận */}
                                    2 bình luận
                                </span>
                            </div>
                        {/* )} */}
                    </div>
                    <div className="post-container__bottom__action">
                        <div
                            className={
                                !post.likeState
                                    ? "col-4 d-flex justify-content-center"
                                    : "col-4 d-flex justify-content-center txt-blue"
                            }
                        >
                            {post.likeState ? (
                                <LikeFilled className="icon" />
                            ) : (
                                <LikeOutlined className="icon" />
                            )}

                            <p>Thích</p>
                        </div>
                        <div
                            className="col-4"
                            onClick={() => setShowComment(true)}
                        >
                            <p>Bình luận</p>
                        </div>
                        <div className="col-4">
                            <p>Chia sẻ</p>
                        </div>
                    </div>
                    <div className="post-container__bottom__comment col-12">
                        <img
                            className="img-circle"
                            alt=""
                            src={process.env.REACT_APP_API_URL + post.User.UserInfo.avatar}
                        />
                        <div className="comment">
                            <TextArea
                                className="textarea"
                                name="text"
                                placeholder="Viết bình luận..."
                                autoSize={{ maxRows: 5 }}
                                // onKeyDown={(e) => handleEnter(e)}
                            />
                        </div>
                    </div>
                    {showComment &&
                        post.commentsOfPost?.length > 0 &&
                        post.commentsOfPost.map((comment, index) => (
                            <Comment comment={comment} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Post;
