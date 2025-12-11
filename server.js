const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const app = express()
const PORT = 3000

const users = []

app.get("/register", async (req, res) => {
    const email = req.query.email
    const password = req.query.password

    if (!email || !password) {
        return res.send("Email and password required")
    }

    const exists = users.find(u => u.email === email)
    if (exists) {
        return res.send("User already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    users.push({ email: email, password: hashedPassword })

    res.send("Registered successfully")
})

app.get("/login", async (req, res) => {
    const email = req.query.email
    const password = req.query.password

    const user = users.find(u => u.email === email)
    if (!user) {
        return res.send("Invalid credentials")
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.send("Invalid credentials")
    }

    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
        expiresIn: "10m"
    })

    res.send(token)
})

app.get("/invoke", (req, res) => {
    const token = req.query.token

    if (!token) {
        return res.send("Access denied")
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET)
        res.send("Function invoked successfully")
    } catch (err) {
        res.send("Access denied")
    }
})

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})
