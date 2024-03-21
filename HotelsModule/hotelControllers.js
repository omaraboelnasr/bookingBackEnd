const hotelModel = require('./hotelModels')
const roomsModel = require('../RoomsModule/roomModels')
const createHotel = async (req,res,next)=>{
    let hotel = req.body
    try{
            let newHotel = await hotelModel.create(hotel)
            res.status(201).json({message:'hotel added successfully',data:newHotel})
    }catch(err){
        res.status(500).json(err.message)
    }
}

const getAllHotel = async (req,res,next)=>{
    try{
            const filter = getFilter(req.query)
            let allHotels = await hotelModel.find(filter)
            res.status(201).json({message:'there is all hotels',data:allHotels})
    }catch(err){
        res.status(500).json(err.message)
    }
}

const getFilter = (query)=>{
    const filter = {}
    if(query.city) {filter.hotelCity = query.city} 
    return filter;
}


const getHotel = async (req,res,next)=>{
    const {id} = req.params;
    try{
            let hotel = await hotelModel.findById(id)
            if(hotel){
                res.status(201).json({message:'that is hotel',data:hotel})
            }else{
                res.status(400).json({ message: "Not Found" })
            }
    }catch(err){
        res.status(500).json(err.message)
    }
}

const updateHotel = async (req,res,next)=>{
    let body = req.body;
    let { id } = req.params
    try{
            let updatedHotel = await hotelModel.findByIdAndUpdate(id,body,{new: true, runValidator: true})
            res.status(200).json({ message: "Hotel updated Successfully", data: updatedHotel });
    }catch(err){
        res.status(500).json(err.message)
    }
}

const deleteHotel = async (req,res,next)=>{
    let { id } = req.params
    try{
            let deletedHotel = await hotelModel.findByIdAndDelete(id)
            res.status(200).json({ message: "Hotel deleted Successfully", data: deletedHotel });
    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports={createHotel,getAllHotel,getHotel,updateHotel,deleteHotel}