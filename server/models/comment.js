import mongoose from "mongoose";
import moment from "moment";
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    contents: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: moment().format("YYYY-MM-DD hh:mm")
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    createrName: {type: String},
});

const Comment = mongoose.model("comment", CommentSchema);
export default Comment;