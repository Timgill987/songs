console.log("\n*** index.js ran ***\n");

const express = require('express');

const server = express();

server.get('/', (req, res) =>{
    const songs = [{ id: 1, name: "Final Countdown"}]

    res.status(200).json(songs)
})

server.use(express.json());
// make port dynamic
const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** Running on port ${port}\n`))