import express from 'express';
import path from 'node:path';
import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
import indexRouter from './routes/indexRouter.js';

config();
const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'public');

// Register CSS styling
app.use(express.static(assetsPath));

// Register view engine
app.set('view engine', 'ejs');

// Pages
app.use('/', indexRouter);

app.get('/new', (req, res) => {
  res.render('new');
});

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
