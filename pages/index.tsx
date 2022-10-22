import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import TodoList from '../components/list'
import Nae from '../components/nae'
import { useRecoilState, useSetRecoilState } from "recoil";
import { Todo, todoListState } from "../atoms/states";
import Modal from '../components/modal'
import {useState} from 'react'
import Usage from '../components/disclosure'

const Home: NextPage = () => {
  let isTask = true;
  const view = (isTask: boolean) => {
    if(isTask)  return <TodoList />;
    else return <Nae />
    }
  
  return (
  <div>
    <h1 className="text-4xl text-green-700 font-logo mb-8 my-2 text-center">Task List</h1>
  
  <div className="flex">
    <div className="container mx-auto text-center">
      
      <div className="flex">
      <div className="planter text-center w-full">
      {view(isTask)}
      </div>
      
      </div>
      
    </div>
   
  </div>
  <div className="text-center">
        <Link href="/inputpage">
          <button
          className="px-4 py-2 rounded bg-green-700 text-white disabled:cursor-default disabled:opacity-50 m-3"
          >タスクを入力する</button>
        </Link>
      </div>
  </div>
  )
}

export default Home
