export default function handler(req, res) {
  res.json({ 
    message: "Hello from the demo endpoint!",
    timestamp: new Date().toISOString()
  });
}
