import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function AddPost() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState(null);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const handlePublish = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", value);
    formData.append("category", categories);
    formData.append("username", "admin");
    formData.append("img", img);
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      body: formData,
    });
    console.log(res);
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorcontainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button className="btn">Save Draft</button>
            <button className="btn" onClick={handlePublish}>
              Publish
            </button>
          </div>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              id="art"
              value="art"
              onChange={(e) => setCategories(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              id="science"
              value="science"
              onChange={(e) => setCategories(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              id="politics"
              value="politics"
              onChange={(e) => setCategories(e.target.value)}
            />
            <label htmlFor="politics">Politics</label>
          </div>
          <div className="cat">
            onChange={(e) => setCategories(e.target.value)}
            <input
              type="radio"
              name="cat"
              id="food"
              value="food"
              onChange={(e) => setCategories(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
          <div className="cat">
            onChange={(e) => setCategories(e.target.value)}
            <input
              type="radio"
              name="cat"
              id="health"
              value="health"
              onChange={(e) => setCategories(e.target.value)}
            />
            <label htmlFor="health">Health</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
