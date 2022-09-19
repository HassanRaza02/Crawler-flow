const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    genesisCount: {
        type: Number,
        required: true,
    },
});

const UserModel = mongoose.model("user", UserSchema);

const add = async (data) => {
    await UserModel.create(data);
}

const getAll = async () => {
    return await UserModel.find({});
}
module.exports = {
    add,
    getAll
}