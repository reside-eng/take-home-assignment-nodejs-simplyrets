import { serve } from "@hono/node-server";
import { Hono } from "hono";
import Database from "better-sqlite3";

// =============== //
// Initialize app  //
// =============== //

// Docs for Hono: https://hono.dev
const app = new Hono();

app.onError((err, c) => {
  console.error(`${err}`);
  c.status(500);
  return c.json({
    error: err.message,
  });
});

// ==================== //
// Initialize database  //
// ==================== //

// Docs for better-sqlite3: https://github.com/WiseLibs/better-sqlite3
const db = new Database("property.db");

// ================== //
// Initialize routes  //
// ================== //

app.get("/properties", (c) => {
  throw new Error("Please implement");
});

app.get("/properties/:id", (c) => {
  const id = c.req.param("id");

  throw new Error("Please implement");
});

app.post("/properties", (c) => {
  throw new Error("Please implement");
});

app.put("/properties", (c) => {
  throw new Error("Please implement");
});

app.delete("/properties", (c) => {
  throw new Error("Please implement");
});

// ========== //
// Start app  //
// ========== //

serve(app);

console.log("Server started at http://localhost:3000");
