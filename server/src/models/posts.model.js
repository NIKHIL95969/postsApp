import mongoose, {Schema} from "mongoose";
    
const postsSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        title: { type: String, required: true },
        body: { type: String, required: true },
        userId: { type: Number, required: true },
        tags: [{ type: String }],
        reactions: { type: Number, required: true }
    },
    {
        timestamps: true
    }
)  

export const Posts = mongoose.model("post", postsSchema)

