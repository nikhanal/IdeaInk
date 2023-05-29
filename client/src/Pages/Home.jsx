import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
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
    <div className="home">
      <div className="posts">
        {Posts.map((post, index) => (
          <div className="post" key={index}>
            <div className="img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="content">
              <Link to={`/post/${index}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
