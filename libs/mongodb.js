import mongoose from "mongoose"

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("error connecting to database : ",error)
    }
}


export default connectMongoDB