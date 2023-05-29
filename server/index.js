import express from "express";
import cors from "cors";
import executeQuery from "./db.js";

import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

app.use("/auth", authRoutes);
// app.use("/api/post", postRoutes);
// app.use("/api/user", userRoutes);

// app.get("/users", async (req, res) => {
//   try {
//     const q = "SELECT * FROM users";
//     const result = await executeQuery(q);
//     return res.status(200).json({
//       users: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       error: "Something went wrong",
//     });
//   }
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
