import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Button from '../components/button'
import TodoList from '../components/list'
import Nae from '../components/nae'
import { useRecoilState, useSetRecoilState } from "recoil";
import { Todo, todoListState } from "../atoms/states";

const Home: NextPage = () => {
  let isTask = true;
  const view = (isTask: boolean) => {
    if(isTask)  return <TodoList />;
    else return <Nae />
    }

  return (
  <div className="container mx-auto text-center">
    <h1 className="text-4xl text-green-700 font-logo mb-8 my-2">Task List</h1>
    <div className="planter text-center mx-auto">
    {view(isTask)}
    </div>
    <div className="text-center">
      <Link href="/input">
        <button
        className="px-4 py-2 rounded bg-blue-500 text-white disabled:cursor-default disabled:opacity-50 m-3"
        >タスクを入力する</button>
      </Link>
    </div>
  </div>
  )
}

export default Home
