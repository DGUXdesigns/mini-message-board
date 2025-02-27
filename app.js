import express from 'express';
import path from 'node:path';
import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
import indexRouter from './routes/indexRouter.js';
import formRouter from './routes/formRouter.js';

config();
const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'public');

// Register CSS styling
app.use(express.static(assetsPath));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Register view engine
app.set('view engine', 'ejs');

// Home page
app.use('/', indexRouter);

// Message Form
app.use('/new', formRouter);

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
