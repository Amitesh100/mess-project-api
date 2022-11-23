const http = require("http");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
const MONGODB_URI = "mongodb+srv://Amitesh:v_R6wkf5-rE-W7e@cluster0.ttpulct.mongodb.net/?retryWrites=true&w=majority"

const server = http.createServer(app);

async function startServer() {
    await mongoose.connect(MONGODB_URI);

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    })
}