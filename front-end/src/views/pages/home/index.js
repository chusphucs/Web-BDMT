import { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import Post from "../../../components/post";
import Posting from "../../../components/posting";
import postApi from "../../../api/postApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "antd/dist/antd.css";

export const Home = () => {
    const [listPosts, setListPost] = useState([]);
    useEffect(() => {
        postApi.getAll().then((response) => {
            setListPost(
                response.data.rows.map((post) => ({
                    title: post.title,
                    content: post.content,
                    image: post.image,
                    createdAt: post.createdAt,
                    User: {
                        name: post.User.name,
                        id: post.User.id,
                        UserInfo: {
                            avatar: post.User.UserInfo.avatar,
                        },
                    },
                }))
            );
        });
    }, []);
    return (
        <Layout>
            <div className="home-container__posts col-6 mx-auto">
                <Posting />
                {listPosts.map((post) => (
                    <Post post={post} />
                ))}
            </div>
        </Layout>
    );
};
