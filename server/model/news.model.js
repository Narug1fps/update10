import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model("news", newsSchema);
