const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const messageSchema = new mongoose.Schema(
{
    message:{
        text: {
            type: String,
            required: true,
        },
    },
    
    users: Array,
    sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
},

{
    timestamps: true,
}
);

module.exports = mongoose.model("Messages", messageSchema);