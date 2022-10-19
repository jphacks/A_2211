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
  <div className="container mx-auto">
    <div className="planter text-center mx-auto">
    {view(isTask)}
    </div>
    <div className="text-center">
      <Link href="/input">
          <Button>タスクを入力する</Button>
      </Link>
    </div>
  </div>
  )
}

export default Home
