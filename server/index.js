import express from "express";
import cors from "cors";
import executeQuery from "./db.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const saltRounds = 10;

const app = express();
app.use(cookieParser());

app.use(cors());
app.use(express.json());
const port = 8000;

//register
app.post("/api/auth/register", async (req, res) => {
  try {
    // Check if user already exists
    const q = "SELECT * FROM users WHERE email = ? or username = ?";
    const result = await executeQuery(q, [req.body.email, req.body.username]);

    if (result[0]) {
      return res.status(409).json({
        error: "User already exists",
      });
    }

    if (!req.body.password) {
      return res.status(400).json({
        error: "Password is required",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Save user to database
    const qq = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    await executeQuery(qq, [req.body.username, req.body.email, hashedPassword]);

    return res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
});

//login
app.post("/api/auth/login", async (req, res) => {
  // Check if user exists
  const q = "SELECT * FROM users WHERE username = ?";
  const result = await executeQuery(q, [req.body.username]);
  if (!result[0]) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    result[0].password
  );
  if (!isPasswordCorrect) {
    return res.status(401).json({
      error: "Incorrect password",
    });
  }
  const token = Jwt.sign({ id: result[0].id }, "jwtkey");
  const { password, ...user } = result[0];
  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: true,
    })
    .json(user);
});

//posts
app.get("/api/posts", async (req, res) => {
  try {
    const q = req.query.cat
      ? "SELECT * FROM posts WHERE category = ?"
      : "SELECT * FROM posts";
    const result = await executeQuery(q, [req.query.cat]);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
});

//post by id
app.get("/api/posts/:id", async (req, res) => {
  try {
    const q =
      "SELECT `username`,`title`,`desc`,p.img,`category`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?";
    const result = await executeQuery(q, [req.params.id]);
    if (!result[0]) {
      return res.status(404).json({
        error: "Post not found",
      });
    }
    return res.status(200).json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
});

//create post
app.post("/api/posts", async (req, res) => {
  try {
    const q = "INSERT INTO posts (title, content) VALUES (?, ?)";
    const result = await executeQuery(q, [req.body.title, req.body.content]);
    return res.status(200).json({
      message: "Post created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
});

//update post
app.put("/api/posts/:id", async (req, res) => {
  try {
    const q = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
    const result = await executeQuery(q, [
      req.body.title,
      req.body.content,
      req.params.id,
    ]);
    return res.status(200).json({
      message: "Post updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
});

//delete post

app.delete("/api/posts/:id", async (req, res) => {
  try {
    const q = "DELETE FROM posts WHERE id = ?";
    const result = await executeQuery(q, [req.params.id]);
    return res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
});

//upload file

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
