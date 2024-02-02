const mongoose = require("mongoose")

const TripSchema = new mongoose.Schema(
    {
        Arrival: {
            type:Date,
            required:[true, "Arrival date required"],
        },
        Departure: {
            type:Date,
            required:[true, "Departure date required"]
        },
        LengthOfStay: {
            type:Number,
            required: [true, "Length of stay required"]
        },
        Cities: {
            type:String,
            required: [true]
        },
        RailPass: {
            type:Boolean,
            required: [true]
        }
    }, {timestamps:true}
)

const Trip = mongoose.model('Trip', TripSchema)
module.exports = Trip