import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleDemo } from './routes/demo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
  res.json({ message: process.env.PING_MESSAGE ?? 'ping' });
});
app.get('/api/demo', handleDemo);

if (process.env.NODE_ENV === 'production'){
  const dist = path.resolve(__dirname, '../client/dist');
  app.use(express.static(dist));
  app.get('*', (_req, res)=>res.sendFile(path.join(dist, 'index.html')));
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
