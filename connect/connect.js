const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express()

const connect = async () => {
    await mongoose.connect(process.env.MONGO_URI)
}

module.exports = connect;