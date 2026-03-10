import mongoose, { Document, Schema } from "mongoose";

export interface Inote extends Document {
  title: string;
  desc: string;
  userid: number;
  status: "completed" | "notcompleted";
}
const noteshema: Schema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  userid: { type: String },
  status: { type: String, default: "notcompleted" },
});
export default mongoose.model<Inote>("note", noteshema);
