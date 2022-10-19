import React from "react"
import Head from 'next/head'
import Link from 'next/link' //追記
import Button from '../components/button'
import { useForm,SubmitHandler } from "react-hook-form"
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/states";
import moment from "moment";


type FormData = {
  id: string,
  title: string,
  priority: number,
  isComplete: boolean,
  
}

const InputPage: React.FC = () => {
  const setTodoList = useSetRecoilState(todoListState);

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

  return (
    <div className="container text-center mx-auto">
      <h1 className="text-4xl text-green-700 font-logo mb-8">タスク入力</h1>
        <div className="item-center">
          <div className="sm:grid sm:grid-cols-2 sm:px-6 mt-3">
            <h3 className="">タスクの内容</h3>
            <input type="text" className="p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300"></input>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:px-6 mt-3">
            <h3 className="">タスク優先度</h3>
                <select className="rounded-lg">
                    <option>---数字が小さい方が優先度高い---</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:px-6 mt-3">
            <h3 className="">期限</h3>
                <input type="date" className="rounded-lg"></input>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:px-6 my-3">
            <h3 className="">タグ</h3>
            <textarea className="p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300"></textarea>
          </div>
        </div>
        <Button>追加</Button>

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
                <button type="submit">送信</button>
            </form>
        </div>
    </div>
    
  )
}

export default InputPage;