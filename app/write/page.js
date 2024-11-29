export default function Write(){
  return(
    <div className="p-20">
      <h4>글작성</h4>
      <form method="POST" action="/api/post/new">
        <input name="title" placeholder="제목을 입력해주세요"></input>
        <input name="content" placeholder="내용을 입력해주세요"></input>
        <button type="submit">저장</button>
      </form>
    </div>
  )
}