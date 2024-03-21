const express=require('express')
const router = express.Router()
const {createHotel,getAllHotel,getHotel,updateHotel,deleteHotel} = require('./hotelControllers')


router.route("/").post(createHotel).get(getAllHotel)
router.route("/:id").get(getHotel).patch(updateHotel).delete(deleteHotel)

module.exports=router