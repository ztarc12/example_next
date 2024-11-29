import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
  console.log(req.body)
  if(req.method === 'DELETE'){
    const {id} = JSON.parse(req.body)

    if(!id || !ObjectId.isValid(id)){
      return res.status(400).json({error : '유효하지 않은 ID 임요'})
    }

    const db = (await connectDB).db('forum')
    const result = await db.collection('post').deleteOne({_id : new ObjectId(id)})

    if(result.deletedCount === 1) {
      return res.status(200).json({message : '삭제 성공', redirect: '/list'})
    } else if (result.deletedCount === 0) {
      return res.status(404).json({error : '삭제할 데이터가 없어요'})
    }
  }
}