export default function Join(){
  return(
    <div className="p-20">
      <h4>회원가입</h4>
      <form method="POST" action="/api/join/new">
        <input name="title" placeholder="아이디를 입력해주세요"></input>
        <input name="content" placeholder="비번을 입력해주세요"></input>
        <button type="submit">저장</button>
      </form>
    </div>
  )
}