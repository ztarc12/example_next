import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const filter = { _id: new ObjectId(req.body._id) };
    if (req.body.title === "") {
      return res.status(400).json("제목입력안함?");
    } else if (req.body.content === "") {
      return res.status(400).json("내용입력안함?");
    }
    try {
      const db = (await connectDB).db("forum");
      await db
        .collection("post")
        .updateOne(filter, {
          $set: { title: req.body.title, content: req.body.content },
        });
      return res.status(200).redirect("/list");
    } catch (error) {
      return res.status(500).json("서버에러");
    }
  }
}
