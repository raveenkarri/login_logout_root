import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

export default function authRoutes(db) {
  // 🔹 Register
  router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.run("INSERT INTO users (email, password) VALUES (?, ?)", [
        email,
        hashedPassword,
      ]);
      res.json({ message: "User registered successfully" });
    } catch (err) {
      res.status(400).json({ error: "Email already exists" });
    }
  });

  // 🔹 Login
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ error: "Invalid credentials" });

    req.session.user = { id: user.id, email: user.email };
    res.json({ message: "Login successful", user: req.session.user });
  });

  // 🔹 Check session
  router.get("/session", (req, res) => {
    if (req.session.user) {
      res.json({ loggedIn: true, user: req.session.user });
    } else {
      res.json({ loggedIn: false });
    }
  });

  // 🔹 Logout
  router.post("/logout", (req, res) => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.json({ message: "Logged out" });
    });
  });

  return router;
}
