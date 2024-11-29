import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  result = result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="list-bg">
      <Link href={"/write"}>글쓰기</Link>
      <ListItem result={result} />
    </div>
  );
}
