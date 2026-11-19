const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS enable karein taake Vercel wala frontend is API ko call kar sake
app.use(cors());
app.use(express.json());

// Dummy data (Memory mein store hoga)
let messages = [
  { id: 1, text: "Hello from Railway Backend!" }
];

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running smoothly on Render!');
});

// Get all messages
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// Add a new message
app.post('/api/messages', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const newMessage = { id: Date.now(), text };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
