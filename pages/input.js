import Head from 'next/head'
import Link from 'next/link' //追記

export default function Home() {
  return (
    <div className="container">
      <h1>タスク入力</h1>
        <div>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </div>
        <div className="InputArea">
            <h3>タスクの内容</h3>
            <textarea rows="10" cols="60"></textarea>
            <h3>タスク優先度</h3>
            <select name="priority" id="priority-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <h3>期限</h3>
            <input type="date" id="start" name="trip-start"></input>
            <h3>タグ</h3>
            <textarea rows="2" cols="60"></textarea>
            <div class="btn">
                <a href="">追加</a>
            </div>
        </div>
        
    </div>
  )
}