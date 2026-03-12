import mongoose, { Document, Schema } from "mongoose";

export interface Inote extends Document {
  title: string;
  desc: string;
  userid: number;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const noteschema: Schema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    userid: { type: String },
    status: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model<Inote>("note", noteschema);
