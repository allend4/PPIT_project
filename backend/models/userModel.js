import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, dropDups: true}, // cant use same email - unique
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false} // by default Users are NOT Admin
});

const userModel = mongoose.model("User", userSchema);

export default userModel;