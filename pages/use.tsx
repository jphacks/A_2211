import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import TodoList from '../components/list'
import Modal from '../components/modal'
import {useState} from 'react'
import Usage from '../components/disclosure'

const Use = () => {

    return (
        <div className="text-center">
            <h1 className="text-center text-3xl text-green-700 font-logo my-8 border-b-4 w-1/2 mx-auto pb-1">Priority TOMATO ~タスクの優先度をわかりやすく~</h1>
            <div className="text-2xl font-logo">
            <div className="py-1">
                Priority TOMATOではタスクが</div>
                <div className="py-1">・期限がどれだけ近いか ・どれだけ重要なものなのか</div>
                <a className="py-1">をトマトを使って表現します。</a>
            </div>
            <Usage></Usage>
        </div>
    )
}

export default Use