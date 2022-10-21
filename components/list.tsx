import { useRecoilState, useSetRecoilState } from "recoil";
import { Todo, todoListState } from "../atoms/states";
import Image from 'next/image'
import dayjs from 'dayjs'
import Nae from '../components/nae'
import Modal from '../components/modal'
import {useState} from 'react'

const TodoList = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    // 完了したTodoを削除
    const deleteTodo = (id:string) => {
        const target = todoList.filter((todo) => {
            return (todo.id != id)
        })
        setTodoList(target);
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);

    
    const Day = (id:string, i:number) => {
        const dateTask = dayjs(id);
        const now = dayjs();
        const day = dateTask.diff(now, 'day', false);
        const  pri = i;

        if(day >= 14)return <Image src="/images/tomatoGreen.png" width={pri * 25} height={pri * 25} />;
        else if(day < 14 && day >= 7)return <Image src="/images/tomatoOrange.png" width={pri * 25} height={pri * 25} />;
        else if(day < 7 && day >= 5)return <Image src="/images/tomatoRedOrange.png" width={pri * 25} height={pri * 25} />;
        else if(day < 5 && day >= 1)return <Image src="/images/tomatoRed1.png" width={pri * 25} height={pri * 25} />;
        else return <Image src="/images/tomatoBlack.png" width={pri * 25} height={pri * 25} />;
    }
   
    return (
        <div className="text-center mx-auto w-3/5 my-2">
            {todoList.map(item =>
                <div key={item.id} className="sm:grid sm:grid-cols-2 shadow-md my-1">
                    
                    <div className="my-auto">
                    {Day(item.date,item.priority)}
                    
                    </div>
                    <div className="border-l-8 bg-red-50 p-2.5 my-2 border-solid shadow-md border-red-400 mr-2">
                        <div className="border-b-2 overflow-auto text-2xl font-logo pb-2">
                        {item.title}
                        </div>
                        <div className="sm:grid-cols-2 sm:grid my-1">
                        <div>
                        優先度:
                        </div>
                        <div>
                        {item.priority}
                        </div>
                        
                        <div>
                        期限:
                        </div>
                        <div>
                        {item.date} まで
                        </div>
                        </div>
                        <button className="px-2 py-1 rounded bg-pink-red text-white disabled:cursor-default disabled:opacity-20 mx-auto" onClick={() => setIsOpen(true)}>タスク完了</button>
                        
                        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <h1 className="text-3xl text-green-700 font-logo mb-8 my-1 text-center">タスクを消去しますか？</h1>
                        <div className="sm:grid sm:grid-cols-2 sm:px-6 my-3">
                        <button  onClick={() => { setIsOpen(false) }} className="text-2xl px-2 py-1 rounded bg-blue-500 text-white disabled:cursor-default disabled:opacity-20 mx-auto">
                            戻る
                        </button>
                        <button  onClick={() => { deleteTodo(item.id),setIsOpen(false) }} className="text-2xl px-2 py-1 rounded bg-pink-red text-white disabled:cursor-default disabled:opacity-20 mx-auto">
                            タスク完了!!
                        </button>
                        </div>
                        </Modal>
                        
                        
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default TodoList