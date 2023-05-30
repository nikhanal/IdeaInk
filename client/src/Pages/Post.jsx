import React, { useEffect, useState } from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";
import moment from "moment";
import { useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";
function Post() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`http://localhost:8000/api/posts/${path}`);
      const data = await res.json();
      console.log(data);
      setPost(data);
    };
    getPosts();
  }, [path]);
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8000/api/posts/${path}`, {
        method: "DELETE",
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(post.category);
  return (
    <div className="single">
      <div className="content">
        <img src={post.img}></img>
        <div className="user">
          <img src="https://images.pexels.com/photos/16837990/pexels-photo-16837990/free-photo-of-village-carved-in-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" onClick={handleDelete} />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu cate={post.category} />
    </div>
  );
}

export default Post;
