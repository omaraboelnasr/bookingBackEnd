const express=require('express')
const router = express.Router()
const {createHotel,getAllHotel,getHotel,updateHotel,deleteHotel,getHotelByCity} = require('./hotelControllers')


router.route("/").post(createHotel).get(getAllHotel)
router.route("/:city").get(getHotelByCity)
router.route("/:id").get(getHotel).patch(updateHotel).delete(deleteHotel)

module.exports=router