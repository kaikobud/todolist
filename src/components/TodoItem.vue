<template>
  <div class="todo-item" v-bind:class="{'is-complete':each_todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{each_todo.title }}
      <button @click="$emit('del-todo', each_todo.id)" class="del">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["each_todo"],
  methods: {
    markComplete() {
      this.each_todo.completed = !this.each_todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>