const mongoose = require('mongoose')

const HotelSchema = mongoose.Schema({
    hotelName:{
        type:String,
        required:[true,'hotel name is required']
    },
    hotelDescription:{
        type:String,
        required:[true,'hotel description is required']
    },
    hotelMainImage:{
        type:String,
        required:[true,'hotel image is required']
    },
    hotelCity:{
        type:String,
        required:[true,'hotel city is required'],
        enum: ['cairo','hurghada','alexandria','sharm el sheikh','dahab']
    },
    hotelAddress:{
        type:String,
        required:[true,'hotel address is required']
    },
    distanceFromCenter:{
        type:Number,
        required:[true,'distance from center is required']
    },
    hotelType:{
        type:String,
        required:[true,'type is required'],
        enum: ['hotel','apartment','resort','villa']
    },
    hotelRating:{
        type:String,
    }
},{collcetion:'hotles'})

const hotelsModel = mongoose.model('hotels',HotelSchema)

module.exports=hotelsModel