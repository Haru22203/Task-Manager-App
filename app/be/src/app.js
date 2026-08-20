import express from "express";
import cors from 'cors'
import taskRoutes from "./routes/route.js";

const app = express();
app.use(cors())
    const allowedOrigins = [
        "http://localhost:5173",
        "https://tasks-manager-app-theta-beryl.vercel.app",
    ];

    app.use(
        cors({
            origin: allowedOrigins,
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
        })
    );
app.use(express.json());

app.use("/api/tasks", taskRoutes);

export default app;