import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  // const Posts = [
  //   {
  //     title: "Post 1",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     image:
  //       "https://images.pexels.com/photos/16837990/pexels-photo-16837990/free-photo-of-village-carved-in-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     title: "Post 2",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     image:
  //       "https://images.pexels.com/photos/16907832/pexels-photo-16907832/free-photo-of-sea-beach-water-wave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     title: "Post 3",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     image:
  //       "https://images.pexels.com/photos/15250698/pexels-photo-15250698/free-photo-of-view-of-a-river-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     title: "Post 4",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     image:
  //       "https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];
  const cat = useLocation().search;
  const [Posts, setPosts] = React.useState([{}]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`http://localhost:8000/api/posts${cat}`);
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, [cat]);
  console.log(Posts);
  return (
    <div className="home">
      <div className="posts">
        {Posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
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
