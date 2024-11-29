import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {title, content} = req.body
    if (req.body.title === "") {
      return res.status(400).json("아이디입력안함?");
    } else if (req.body.content === "") {
      return res.status(400).json("비밀번호입력안함?");
    }
    try {
      const db = (await connectDB).db("forum");
      const dupId = await db.collection("post").findOne({ title });
      if (dupId) {
        return res.status(400).json("아이디중복임");
      }
      await db.collection("post").insertOne({ title, content });
      return res.status(200).json("회원가입성공");
    } catch (error) {
      return res.status(500).json("서버에러");
    }
  } else {
    return res.status(405).json("허용되지 않은 메서드");
  }
}
