import { useRecoilState, useSetRecoilState } from "recoil";
import { Todo, todoListState } from "../atoms/states";
import Image from 'next/image'
import dayjs from 'dayjs'
import Nae from '../components/nae'

const TodoList = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    // 完了したTodoを削除
    const deleteTodo = (id:string) => {
        const target = todoList.filter((todo) => {
            return (todo.id != id)
        })
        setTodoList(target);
    }
    
    todoList.map(item =>{
        const dateTask = dayjs(item.date);
        const now = dayjs();
        const day = now.diff(dateTask, 'day', false);
        const hoge = (day: number) => {
            if(day <= 3)  return <Image src="/images/tomatoRed.png" width={item.priority * 25} height={item.priority * 25} />;
            else return <Nae />
            }
    })
    return (
        <div className="text-center mx-auto w-2/4">
            {todoList.map(item =>
                <div key={item.id} className="sm:grid sm:grid-cols-2">
                    <div className="mx-auto my-auto">
                    <Image src="/images/tomatoRed.png" width={item.priority * 25} height={item.priority * 25} />
                    </div>
                    <div className="border-black p-2.5 my-2 border-solid border-2 rounded-lg ">
                        <div className=" bg-gray-500">
                        {item.title}
                        </div>
                        優先度:{item.priority} <br />
                        日付:{item.date} <br />

                        <button  onClick={() => { deleteTodo(item.id) }} >
                            完了
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TodoList