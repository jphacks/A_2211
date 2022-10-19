import React from "react"
import Head from 'next/head'
import Link from 'next/link' //追記
import Button from '../components/button'
import { useForm,SubmitHandler } from "react-hook-form"


const InputPage = () => {
  return (
    <div className="container text-center mx-auto">
      <h1 className="text-4xl text-green-700 font-logo">タスク入力</h1>
        <div className="item-center">
            <h3 className="">タスクの内容</h3>
            <textarea className="p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300"></textarea>
            <h3 className="">タスク優先度</h3>
            <div  className="">
                <select className="rounded-lg">
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
                <input type="date" className="rounded-lg"></input>
            </div>
            <h3 className="">タグ</h3>
            <textarea className="p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300"></textarea>
        </div>
        <Button>追加</Button>
    </div>
  )
}

export default InputPage;