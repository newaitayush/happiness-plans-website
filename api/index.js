import serverless from "serverless-http";
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get("/api/ping", (_req, res) => {
  const ping = process.env.PING_MESSAGE ?? "ping";
  res.json({ message: ping });
});

app.get("/api/demo", (_req, res) => {
  res.json({
    message: "Hello from the demo endpoint!",
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get("/", (_req, res) => {
  res.json({ status: "API is running" });
});

export default serverless(app);
