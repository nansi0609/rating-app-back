const mongoose = require("mongoose");
const form = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    date_time: {
        type: String,
    },
    communication: {
        type: Number,
    },
    technical_skills: {
        type: Number,
    },
    attitude: {
        type: Number,
    },
    team_player: {
        type: Number,
    },
    remark: {
        type: String,
    },
});
module.exports = mongoose.model("data", form);