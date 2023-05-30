import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const cat = props.cate;
  const [Posts, setPosts] = React.useState([{}]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`http://localhost:8000/api/posts/?cat=${cat}`);
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, [cat]);
  console.log(Posts);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {Posts.map((post, index) => (
        <div className="post" key={index}>
          <img src={post.img} alt={post.title} />
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
