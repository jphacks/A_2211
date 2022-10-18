import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
  <div className="container mx-auto">
    <h1 className="text-center">トマト</h1>
    <div className="text-center">
      <Link href="/input">
          <a>入力画面へ</a>
      </Link>
    </div>
    <div className="planter text-center mx-auto">
      <a>タスクなし</a>
      <div>
        <Image src="/images/nae.png" width={200} height={150}/>
      </div>
    </div>
  </div>
  )
}

export default Home
