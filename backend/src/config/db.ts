import mongoose from "mongoose";
export const connectdb = async () => {
  try {
    await mongoose.connect("URL");
    console.log("data base connected");
  } catch (error) {
    console.error("data base not connected", error);
  }
};
