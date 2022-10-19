import { useRecoilState, useSetRecoilState } from "recoil";
import { Todo, todoListState } from "../atoms/states";
import Image from 'next/image'

const TodoList = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    // 完了したTodoを削除
    const deleteTodo = (id:string) => {
        const target = todoList.filter((todo) => {
            return (todo.id != id)
        })
        setTodoList(target);
    }
    return (
        <div className="text-center mx-auto w-2/4">
            {todoList.map(item =>
                <div key={item.id} className="border-black p-2.5 my-2 border-solid border-2 ">
                    <div className=" bg-gray-500">
                    {item.title}
                    </div>
                    優先度:{item.priority} <br />

                    日付:{item.date} <br />
                    <div className="">
                    <Image src="/images/tomatoRed.png" width={item.priority * 25} height={item.priority * 25} />
                    </div>
                    <button  onClick={() => { deleteTodo(item.id) }} >
                        完了
                    </button>
                </div>
            )}
        </div>
    )
}

export default TodoList