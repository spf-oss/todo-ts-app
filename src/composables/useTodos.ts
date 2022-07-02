import { onMounted, Ref, ref } from "vue";
import ITodoListItem from "./ITodoListItem";

export default function useTodos(): IUseTodos {
    const todos: Ref<ITodoListItem[]> = ref([]);

    const addTodo = (todo: ITodoListItem) => {
        console.log(todo);
        todos.value.push(todo)
    };

    const fetchTodos = async () => {
        // 请求数据

        const responst = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")

        const rawTodos = await responst.json();
        console.log(rawTodos)
        if (rawTodos as ITodoListItem) {
            const items = <ITodoListItem[]>rawTodos;
            console.log(items)

            for (const item of items) {
                todos.value.push(item)
            }
        }
    };

    onMounted(() => {
        fetchTodos();
    });

    return {
        todos,
        addTodo
    }
}

export interface IUseTodos {
    todos: Ref<ITodoListItem[]>,
    addTodo: (todo: ITodoListItem) => void
}