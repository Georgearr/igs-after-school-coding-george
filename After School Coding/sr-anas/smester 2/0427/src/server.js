import express from "express";
import cors from "cors";

import routes from "./routes/routes.js";

const app = express();
const PORT = 8000; 

app.use(cors({
    origin: "http://localhost:8080"
}));

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});