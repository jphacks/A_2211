import Head from 'next/head'
import Link from 'next/link' //追記

const InputPage = () => {
  return (
    <div className="container text-center mx-auto">
      <h1 className="text-4xl text-green-700">タスク入力</h1>
        <div className="item-center">
            <h3 className="">タスクの内容</h3>
            <h3 className="">タスク優先度</h3>
            <div  className="">
                <select>
                    <option>---数字が小さい方が優先度高い---</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <h3 className="">期限</h3>
            <div  className="">
                <input type="date"></input>
            </div>
            <h3 className="">タグ</h3>
        </div>
        
    </div>
  )
}

export default InputPage;