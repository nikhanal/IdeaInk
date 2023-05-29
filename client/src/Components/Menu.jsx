import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const Posts = [
    {
      title: "Post 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image:
        "https://images.pexels.com/photos/16837990/pexels-photo-16837990/free-photo-of-village-carved-in-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Post 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image:
        "https://images.pexels.com/photos/16907832/pexels-photo-16907832/free-photo-of-sea-beach-water-wave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Post 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image:
        "https://images.pexels.com/photos/15250698/pexels-photo-15250698/free-photo-of-view-of-a-river-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Post 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image:
        "https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {Posts.map((post, index) => (
        <div className="post" key={index}>
          <img src={post.image} alt={post.title} />
          <Link to={`/post/${index}`}>
            <h2>{post.title}</h2>
          </Link>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
