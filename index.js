const express = require("express");
const cors = require("cors")
const mongoose = require('mongoose');
const userRoutes = require('./UsersModule/userRoutes');
const hotelsRoutes = require('./HotelsModule/hotelRoutes');
const roomRoutes = require('./RoomsModule/roomRoutes');
const app = express();
const port = 3090
app.listen(port);

mongoose.connect('mongodb://127.0.0.1:27017/Booking')
app.use(cors())
app.use(express.json());
app.use('/user',userRoutes)
app.use('/hotels',hotelsRoutes)
app.use('/rooms',roomRoutes)

app.use("*", (req, res, next) => {
    res.status(404).json({ mesage: "Not Found" })
})

