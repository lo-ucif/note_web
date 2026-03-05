import mongoose from "mongoose";
export const connectdatabase = async () => {
  try {
    await mongoose.connect("URL");
    console.log("data base connected");
  } catch (error) {
    console.error("data base not connected", error);
  }
};
