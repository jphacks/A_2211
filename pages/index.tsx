import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Button from '../components/button'
import TodoList from '../components/list'

const Home: NextPage = () => {
  return (
  <div className="container mx-auto">
    <div className="planter text-center mx-auto">
      <h3>タスクはありません</h3>
      <div>
        <Image src="/images/nae.png" width={200} height={150}/>
      </div>
    </div>
    <TodoList />
    <div className="text-center">
      <Link href="/input">
          <Button>タスクを入力する</Button>
      </Link>
    </div>
  </div>
  )
}

export default Home
