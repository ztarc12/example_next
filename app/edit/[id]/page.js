import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className="p-20">
      <h4>글수정</h4>
      <form method="POST" action="/api/post/edit">
        <input name="_id" defaultValue={result._id.toString()} type="hidden"></input>
        <input name="title" defaultValue={result.title}></input>
        <input name="content" defaultValue={result.content}></input>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
