// index.js - LeadReply entry point
console.log("LeadReply server starting...");

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('LeadReply API is running - AI lead follow-up tool');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
