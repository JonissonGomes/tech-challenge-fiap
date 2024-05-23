const express = require('express');
const app = express();
const port = 8080;

app.get('/', (_req: any, res: any) => {
    res.send('Heartbeat OK 💥');
});

app.listen(port, () => {
    console.log(`Tech Challenge running at http://localhost:${port} 🚀`);
});