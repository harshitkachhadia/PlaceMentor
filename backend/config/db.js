import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hiixyz1122:hiixyz1122@cluster1.cydg6.mongodb.net/PlaceMentor')
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("ERROR : ",err.message))
}

