import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import { initDb } from "./db.js";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://login-logout-root.vercel.app/",
    credentials: true,
  })
);
app.use(
  session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, 
  })
);

let db;
initDb().then((database) => {
  db = database;
  app.use("/api", authRoutes(db));
  app.listen(PORT, () =>
    console.log(`✅ Server running at http://localhost:${PORT}`)
  );
});
