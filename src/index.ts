import { serve } from "@hono/node-server";
import { Hono } from "hono";
import Database from "better-sqlite3";

// =============== //
// Initialize app  //
// =============== //

// Docs for Hono: https://hono.dev
const app = new Hono();

// ==================== //
// Initialize database  //
// ==================== //

// Docs for better-sqlite3: https://github.com/WiseLibs/better-sqlite3
const db = new Database("property.db");

// ================== //
// Initialize routes  //
// ================== //

app.get("/properties", (c) => {
  return c.text("GET all properties");
});

app.get("/properties/:id", (c) => {
  const id = c.req.param("id");

  return c.text(`GET property by id ${id}`);
});

app.post("/properties", (c) => {
  return c.text("Create property");
});

app.put("/properties", (c) => {
  return c.text("Update property");
});

app.delete("/properties", (c) => {
  return c.text("Delete property");
});

// ========== //
// Start app  //
// ========== //

serve(app);

console.log("Server started at http://localhost:3000");
