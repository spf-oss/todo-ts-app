<template>
  <div class="todo-list">
    <todo-list-item 
    v-for="todo in todos"
    :key="todo.id"
    @change-state="todo.completed = $event.target.checked" 
    :todo-item="todo">
    </todo-list-item>
  </div>
</template>

<script lang="ts">
import ITodoListItem from '@/composables/ITodoListItem';
import { defineComponent, PropType } from 'vue'
import TodoListItem from './TodoListItem.vue'

export default defineComponent({
  components: { TodoListItem },
  setup() {
    return {};
  },
  props:{
    todos:{
      type:Object as PropType<ITodoListItem[]>
    }
  }
})
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>