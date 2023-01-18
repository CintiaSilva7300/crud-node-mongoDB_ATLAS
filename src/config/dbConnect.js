import mongoose from "mongoose";

mongoose.connect("mongodb+srv://cintia:123@cluster0.6vgzuvr.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;
