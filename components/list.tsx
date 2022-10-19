import { useRecoilState, useSetRecoilState } from "recoil";
import { Todo, todoListState } from "../atoms/states";

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
        <div>
            {todoList.map(item =>
                <div key={item.id}>
                    タイトル:{item.title} <br />
                    テキスト:{item.priority} <br />
                    <button  onClick={() => { deleteTodo(item.id) }} >
                        完了
                    </button>
                </div>
            )}
        </div>
    )
}

export default TodoList