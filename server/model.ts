import mongoose from "mongoose";


interface propData {
    title: string
}

interface dataCollection extends propData, mongoose.Document{}

const modelData = new mongoose.Schema(
    {
        title: String,
    },
    { timestamps: true },
);

export default mongoose.model<dataCollection>("models", modelData)
