import mysql from "mysql2/promise";

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "N@m@ste9861",
  database: "blog",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Execute a query using the pool
const executeQuery = async (query, params) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(query, params);
    return results;
  } finally {
    connection.release();
  }
};

export default executeQuery;
