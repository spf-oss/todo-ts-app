import { onMounted, Ref, ref } from "vue";
import ITodoListItem from "./ITodoListItem";

export default function userTodos(): IUseTodos {
    const todos: Ref<ITodoListItem[]> = ref([]);

    const addTodo = (todo: never) => todos.value.push(todo);

    const fetchTodos = async () => {
        const responst = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        const rawTodos = await responst.json();

        if (rawTodos as ITodoListItem) {
            const items = <ITodoListItem[]>rawTodos;

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
    addTodo: (todo: never) => number
}