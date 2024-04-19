const mongoose = require("mongoose");
const HotelSchema = mongoose.Schema({
    hotelName:{
        type:String,
        required:[true,'hotel name is required']
    },
    hotelName_ar:{
        type:String,
        required:[true,'hotel name is required']

    },
    hotelDescription:{
        type:String,
        required:[true,'hotel description is required']
    },
    hotelSubDescription:{
        type:String,
        required:[true,'hotel subdescription is required'],
        minLength: 15,
		maxLength: 150,
    },
    hotelSubDescription_ar:{
        type:String,
        required:[true,'hotel subdescription is required'],
        minLength: 15,
		maxLength: 150,
    },

    hotelMainImage:{
        type:String,
        required:[true,'hotel image is required']
    },

    hotelCity:{
        type:String,
        required:[true,'hotel city is required'],
        enum: ['cairo','hurghada','alexandria','sharmelsheikh','dahab']
    },

    hotelCity_ar:{
        type:String,
        required:[true,'hotel city is required'],
        enum:['القاهره','الغردقه',"الاسكندريه",'شرم الشيخ','دهب']
    },

    hotelAddress:{
        type:String,
        required:[true,'hotel address is required']
    },
    hotelAddress_ar:{
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
    distanceFromCenter_ar:{
        type:Number,

    },
    hotelRating:{
        type:String,
    }
},{collcetion:'hotles'})

const hotelsModel = mongoose.model("hotels", HotelSchema);

module.exports = hotelsModel;
