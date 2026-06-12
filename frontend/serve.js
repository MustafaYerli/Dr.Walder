const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Single source of truth: serve directly from /app/static-website
const SITE_DIR = path.join(__dirname, '..', 'static-website');

// Serve static files directly from the source directory
app.use(express.static(SITE_DIR));

// Handle all routes - send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(SITE_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server running on http://0.0.0.0:${PORT}`);
});
