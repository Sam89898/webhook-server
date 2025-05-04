const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;
const LOG_FILE = path.join(__dirname, 'log.txt');

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const payload = req.body;
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] 收到訊號:\n${JSON.stringify(payload, null, 2)}\n\n`;

    fs.appendFile(LOG_FILE, logEntry, (err) => {
        if (err) {
            console.error('❌ 無法寫入 log 檔:', err);
        } else {
            console.log(`✅ 已記錄 webhook 訊號 @ ${timestamp}`);
        }
    });

    console.log(logEntry);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`✅ Webhook Server 正在監聽 Port ${PORT}`);
});
