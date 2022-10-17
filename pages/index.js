import Head from 'next/head'
import Link from 'next/link' //追記

export default function Home() {
  return (
    <div className="container">
      <h1>トマト</h1>
      <div>
        <Link href="/input">
            <a>入力画面へ</a>
        </Link>
      </div>
      <div className="planter">ここにタスクのトマトを表示</div>
      
    </div>
  )
}
