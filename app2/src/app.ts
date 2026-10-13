import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "health check" })
});

app.listen(2002, () => {
    console.log("app running on port 2002")
})