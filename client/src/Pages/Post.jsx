import React from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";
function Post() {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/16837990/pexels-photo-16837990/free-photo-of-village-carved-in-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
        <div className="user">
          <img src="https://images.pexels.com/photos/16837990/pexels-photo-16837990/free-photo-of-village-carved-in-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
          <div className="info">
            <span>Nishan</span>
            <p>Posted 1 hour ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatumLorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, voluptatumLorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptatum
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatumLorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatumLorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, voluptatumLorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptatumLorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumLorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptatumLorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, voluptatum
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatumLorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatumLorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, voluptatumLorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptatumLorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumLorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatumLorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, voluptatumLorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptatum
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatumLorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatumLorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, voluptatumLorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptatumLorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumLorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Post;
