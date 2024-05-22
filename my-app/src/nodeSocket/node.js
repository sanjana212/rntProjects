// const express = require('express');
// const { spawn } = require('child_process');
// const stream = require('stream');
// const WebSocket = require('ws');

// const app = express();
// app.use(express.json());

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

// const server = app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });

// const wss = new WebSocket.Server({ server });
// wss.on('connection', (ws) => {
//     let tail;

//     ws.on('message', (message) => {
//         // Parse the incoming message from the client
//         const data = JSON.parse(message);
//         const logFilePath = `/usr/share/tomcat9/logs/${data.path}`;
//             const data1='rdbms.log';
//         // Create a new tail process for the log file
//         tail = spawn('tail', ['-n', '100', '-f', logFilePath]);

//         // Increase the buffer size to receive more data (4 MB)
//         tail.stdout = tail.stdout.pipe(new stream.PassThrough({ highWaterMark: 4 * 1024 * 1024 }));

//         // Send log data to the client when received from the tail process
//         tail.stdout.on('data', (logData) => {
//             // Send the log data as a WebSocket message
//             ws.send(JSON.stringify({ data: logData.toString() }));
//         });

//         tail.stderr.on('data', (data) => {
//             console.error(`Error: ${data}`);
//         });

//         tail.on('error', (err) => {
//             console.error('Tail process error:', err);
//         });

//         ws.on('close', () => {
//             // Close the tail process when the client disconnects
//             tail.kill();
//         });
//     });
// });