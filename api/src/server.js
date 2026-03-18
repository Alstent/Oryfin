import 'dotenv/config';
import app from './app.js';

const defaultPort = 5001;
const PORT = process.env.PORT || defaultPort;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
