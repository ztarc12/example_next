import { connectDB } from "@/util/database"

export default async function handler(req, res){
  if(req.method === 'POST') {
    if(req.body.title === '') {
      return res.status(400).json('제목입력안함?')
    } else if (req.body.content === '') {
      return res.status(400).json('내용입력안함?')
    }
    try {
      const db = (await connectDB).db('forum')
      await db.collection('post').insertOne(req.body)
      return res.status(200).redirect('/list')
    } catch (error){
      return res.status(500).json('서버에러')
    }
  }
}