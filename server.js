const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

// Body parser
app.use(bodyParser.json())

mongoose.connect("localhost")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})