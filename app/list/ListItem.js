'use client'

import Link from "next/link"

export default function ListItem({result}){
  const deleteBtn = (id) => {
    console.log(id)
    fetch('/api/deletes/delete', {
      method : 'DELETE',
      body : JSON.stringify({id})
    })
    .then((res)=>{
      if(res.status === 200) {
        return res.json()
      }
    })
    .then((result)=>{
      console.log(result)
    })
    .then((err)=>{
      console.log(err)
    })
  }
  return(
    <div>
      {
        result.map((a,i)=>{
          return(
            <div className="list-item" key={i}>
              <Link href={`detail/${a._id}`}>
                <h4>{a.title}</h4>
              </Link>
              <Link href={`edit/${a._id}`}>✏️</Link>
              <span onClick={()=>{deleteBtn(a._id)}}>🗑️</span>
              <p>1월 1일</p>
            </div>
          )
        })
      }
    </div>
  )
}