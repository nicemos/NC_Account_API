import app from './app.mjs';
const { PORT = 9090 } = process.env;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/api/`));