<template>
  <div>
    <div v-bind:key="t" v-for="t in todo_list">
      <TodoItem v-bind:each_todo="t" v-on:del-todo="$emit('del-todo', t.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todo_list"]
};
</script>

<style lang="stylus" scoped></style>