import React from "react"
import Head from 'next/head'
import Link from 'next/link' //追記
import Button from '../components/button'
import { useForm,SubmitHandler } from "react-hook-form"
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/states";
import { isTask } from "../atoms/task";
import moment from "moment";
import Modal from '../components/modal'
import {useState} from 'react'

type FormData = {
  id: string,
  title: string,
  priority: number,
  date: string,
  isComplete: boolean,
  
}

const InputPage: React.FC = () => {
  const setTodoList = useSetRecoilState(todoListState);

  const setTask = useSetRecoilState(isTask);
    // react-hook-formを設定
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        mode: 'onChange',
        defaultValues: {
        id : moment().format('YYYYMMDDHHmmss'),
        title: '',
        priority: NaN,
        isComplete: false,
        }
    })

    // Todoを追加
    const addTodo = (data: FormData) => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            data,
        ]);
        reset()
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="container text-center mx-auto my-2">
      <h1 className="text-4xl text-green-700 font-logo mb-8">Task Input</h1>
        <div>
            <form onSubmit={handleSubmit(addTodo)}>
            <div className="sm:grid sm:grid-cols-2 sm:px-6 my-3">
                <h2>タスクの内容</h2>
                {/* 入力要素とvalidationを設定 */}
                <input
                    type="text"
                    className="p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300"
                    {...register(
                        "title",
                        {
                            required: '必須項目です',
                        }
                    )}
                />
                {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div className="sm:grid sm:grid-cols-2 sm:px-6 my-3">
                  <h2>タスク優先度</h2>
                  <select 
                    className="rounded-lg"
                    {...register(
                      "priority",
                      {
                          required: '必須項目です',
                      }
                  )}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
                  {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div className="sm:grid sm:grid-cols-2 sm:px-6 my-3">
                  <h3 className="">期限</h3>
                  <input type="date" 
                  className="rounded-lg"
                  {...register(
                    "date",
                    {
                        required: '必須項目です',
                    }
                  )}></input>
                </div>
                <button onClick={() => setIsOpen(true)} type="submit" className="px-4 py-2 rounded bg-green-700 text-white disabled:cursor-default disabled:opacity-50">送信</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  <h1 className="text-3xl text-green-700 font-logo mb-8 my-1 text-center">タスクを登録しました</h1>
                  <div className="sm:grid sm:grid-cols-2 sm:px-6 my-3">
                  
                    <button
                    onClick={() => setIsOpen(false)}
                    className="px-2 py-2 rounded bg-green-700 text-white disabled:cursor-default disabled:opacity-50 m-3"
                    >続けて入力する</button>
                 
                  <Link href="/">
                    <button
                    className="px-4 py-2 rounded bg-green-700 text-white disabled:cursor-default disabled:opacity-50 m-3"
                    >タスクリストへ</button>
                  </Link>
                  </div>
                </Modal>
            </form>
        </div>
    </div>
    
  )
}

export default InputPage;