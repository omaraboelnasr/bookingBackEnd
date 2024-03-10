const express=require('express')
const router = express.Router()
const {createRoom , getAllRooms,getRoom,updateRoom,deleteRoom} = require('./roomControllers')



router.route('/:hotelID').post(createRoom).get(getAllRooms)
router.route('/room/:roomID').get(getRoom).patch(updateRoom).delete(deleteRoom)

module.exports=router