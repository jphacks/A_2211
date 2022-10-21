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
    const Pri = (id:number) => {
        const pri = id;
        return pri;
    }
    
    const Day = (id:string, i:number) => {
        const dateTask = dayjs(id);
        const now = dayjs();
        const day = dateTask.diff(now, 'day', false)+1;
        const  pri = i;

        if(day >= 14)return <Image src="/images/tomatoGreen.png" width={pri * 20} height={pri * 20} />;
        else if(day < 14 && day >= 7)return <Image src="/images/tomatoOrange.png" width={pri * 20} height={pri * 20} />;
        else if(day < 7 && day >= 5)return <Image src="/images/tomatoRedOrange.png" width={pri * 20} height={pri * 20} />;
        else if(day < 5 && day >= 3)return <Image src="/images/tomatoRed1.png" width={pri * 20} height={pri * 20} />;
        else return <Image src="/images/tomatoBlack.png" width={pri * 20} height={pri * 20} />;
    }
   
    return (
        <div className="text-center mx-auto w-2/4 my-2">
            {todoList.map(item =>
                <div key={item.id} className="sm:grid sm:grid-cols-2">
                    
                    <div className="my-auto">
                    {Day(item.date,item.priority)}
                    
                    </div>
                    <div className="border-black p-2.5 my-2 border-solid border-2 rounded-lg ">
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
                        <div></div>
                        <button  onClick={() => { deleteTodo(item.id) }} >
                            完了
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TodoList