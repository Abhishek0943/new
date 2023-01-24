const express = require ("express")
const app = express()
app.get("/", (req, res) => {
    res.send("hii i am fine ")
})
app.get("/user", (req, res) => {
    res.json({
        user: "ahfsjf",
        success: true
    })
})
app.listen(3000, () => {
    console.log(`server start on 3000`)
})