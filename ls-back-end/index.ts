import { configDotenv } from "dotenv";
import express from "express";
configDotenv()

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})